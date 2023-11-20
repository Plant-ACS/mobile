import { BleManager, Characteristic, Device } from "react-native-ble-plx"
import { encode, decode } from "base-64"

export default class BaseConnection {
  private static bleManager = new BleManager()
  private static deviceConnected: Device | null = null
  private static characteristics: Characteristic[][] = []

  public static async Connect(device: Device) {
    try {
      BaseConnection.bleManager.stopDeviceScan()
      await BaseConnection.bleManager.connectToDevice(device.id).then(async (device) => {
        this.deviceConnected = device
        await this.deviceConnected.discoverAllServicesAndCharacteristics();

        // Encontre o serviço BLE pelo UUID
        const service = (await this.deviceConnected.services())[2];

        if (service) {
          // Encontre as características do serviço
          const characteristics = await service.characteristics();

          this.deviceConnected.serviceUUIDs = [...characteristics.map((characteristic) => characteristic.uuid), service.uuid]
          console.log('Service UUID:', this.deviceConnected.serviceUUIDs);

          // Agora, você pode interagir com as características
          for (const characteristic of characteristics) {
            console.log('Characteristic UUID:', characteristic.uuid);
          }
        } else {
          throw new Error('Service not found');
        }
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

  public static Read(): Object {
    try {
      if (!this.deviceConnected)
        throw new Error("No device connected")
      let result = ""

      this.deviceConnected.monitorCharacteristicForService(
        this.deviceConnected.serviceUUIDs!![2],
        this.deviceConnected.serviceUUIDs!![0],
        (error, characteristic) => {
          if (error) {
            throw error
          }
          console.log(characteristic?.value)
          if (characteristic) {
              result += decode(characteristic.value!!)
          }
        }
      )

      while (result.match(/{/g)?.length !== result.match(/}/g)?.length);
      return result
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