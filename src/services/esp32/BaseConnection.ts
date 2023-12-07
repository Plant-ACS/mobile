import { BleManager, Device } from "react-native-ble-plx"
import base64, { encode, decode } from "base-64"

export default class BaseConnection {
  private static bleManager = new BleManager()
  private static deviceConnected: Device | null = null
  private static msg: string = ""

  public static async Connect(device: Device) {
    try {
      BaseConnection.bleManager.stopDeviceScan()
      await BaseConnection.bleManager.connectToDevice(device.id).then(async (device) => {
        this.deviceConnected = device
        await this.deviceConnected.discoverAllServicesAndCharacteristics();

        await this.initializeCharacteristics()        
        await this.startMonitor()
      })
    } catch (error) {
      throw error
    }
  }

  private static async initializeCharacteristics() {
    if (!this.deviceConnected)
      throw new Error('No device connected');
    const service = (await this.deviceConnected.services())[2];

    if (service) {
      const characteristics = await service.characteristics();
      this.deviceConnected.serviceUUIDs = [...characteristics.map((characteristic) => characteristic.uuid), service.uuid]
      
    } else {
      throw new Error('Service not found');
    }
  }
  
  public static async startMonitor() {
    if (!this.deviceConnected)
      throw new Error("No device connected")
    this.deviceConnected.monitorCharacteristicForService(
      this.deviceConnected.serviceUUIDs!![2],
      this.deviceConnected.serviceUUIDs!![0],
      (error, characteristic) => {
        if (error) {
          console.error('Error during monitoring:', error);
          return;
        }
        var base64 = require('base-64');
        if (characteristic) {
          console.log('Received data: ' + base64.decode(characteristic.value!!));
          console.log('Received data: ' + decode(characteristic.value!!));
          this.msg += decode(characteristic.value!!);
        }
      }
    )
  }

  public static async Send(data: Object): Promise<boolean> {
    try {
      if (!this.deviceConnected)
        throw new Error("No device connected")

      if (!this.deviceConnected.isConnected())
        throw new Error("Device is not connected")
      JSON.stringify(data).match(/.{1,20}/g)?.map(async (dataPacket) => {
        this.deviceConnected?.writeCharacteristicWithResponseForService(
          this.deviceConnected.serviceUUIDs!![2],
          this.deviceConnected.serviceUUIDs!![1],
          encode(dataPacket)
        )
      })

      return true
    }
    catch (error) {
      return false
    }
  }

  public static async Read(): Promise<Object> {

    return new Promise((resolve, reject) => {
      let initalLength
      let finalLength
      do {
        const intial = this.msg.match(/{/g)
        const final = this.msg.match(/}/g)
        initalLength = !intial? 0 : intial.length
        finalLength = !final? -1 : final.length

      } while(initalLength !== finalLength);
      
      const data = JSON.parse(this.msg)
      console.log(this.msg)
      this.msg = ""
      resolve(data)
    })
  }

  public static async Disconnect() {
    try {
      if (!this.deviceConnected)
        throw new Error("No device connected");
      if (!this.deviceConnected.isConnected())
        throw new Error("Device is not connected");
      this.bleManager.cancelDeviceConnection(this.deviceConnected.id)
      this.deviceConnected = null
    } catch (error) {
      throw error
    }
  }
  
  public static ScanBluetooths(addDevice: (devices: Device) => void) {
    this.bleManager.startDeviceScan(
        null, null,
        (error,device) =>{
            if(error) return
            if(device && device.name) {
                if(device)
                    if(device.name)
                        return addDevice(device)
            }
        }
    )
  }
}