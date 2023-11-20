import { BleManager, Characteristic, Device } from "react-native-ble-plx"

export default class BaseConnection {
  private static bleManager = new BleManager()
  private static deviceConnected: Device | null = null
  private static characteristics: Characteristic[][] = []

  public static async Connect(device: Device) {
    try {
      BaseConnection.bleManager.stopDeviceScan()
      await BaseConnection.bleManager.connectToDevice(device.id).then(async (device) => {
        this.deviceConnected = device
        await this.deviceConnected.discoverAllServicesAndCharacteristics()
        while (!this.deviceConnected.isConnected())
        device.services()
          .then( async (services) => {
            for(const service of services)
              service.characteristics().then((characteristic) => {
                this.characteristics = [...this.characteristics, characteristic]
              })
          })
        })
    } catch (error) {
      throw error
    }
  }

  public static async Send(data: Object): Promise<boolean> {
    try {
      if (!this.deviceConnected)
        throw new Error("No device connected")

      if (!this.deviceConnected.isConnected())
        throw new Error("Device is not connected")
      JSON.stringify(data).match(/.{1,20}/g)?.map(async (dataPacket) => {
        this.characteristics[0][0].writeWithResponse(dataPacket)
      })

      return true
    }
    catch (error) {
      return false
    }
  }

  public static Read(): Object {
    try {
      if (!this.deviceConnected)
        throw new Error("No device connected")
      let result = ""

      this.deviceConnected.monitorCharacteristicForService(
        this.deviceConnected.serviceUUIDs!![0],
        this.deviceConnected.serviceUUIDs!![1],
        (error, characteristic) => {
          if (error) {
            throw error
          }
          if (characteristic) {
              result += characteristic.value
          }
        }
      )

      while (result.match(/{/g)?.length !== result.match(/}/g)?.length);
      return JSON.parse(result)
    } catch (error) {
      throw error
    }
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