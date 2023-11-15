import { BleManager, Characteristic, Device } from "react-native-ble-plx"

export default class BaseConnection {
  private static bleManager = new BleManager()
  private static deviceConnected: Device | null = null

  public static async Connect(device: Device) {
    try {
      BaseConnection.bleManager.stopDeviceScan()
      await BaseConnection.bleManager.connectToDevice(device.id).then(async (device) => {
        this.deviceConnected = device
        await this.deviceConnected.discoverAllServicesAndCharacteristics()
        while (!this.deviceConnected.isConnected());
        console.log(
          await new Promise((resolve, reject) => {
                device.services().then(services => {
                    const characteristics: Characteristic[][] = []

                    services.forEach((service, i) => {
                        service.characteristics().then(c => {
                            characteristics.push(c)

                            if (i === services.length - 1) {
                                const temp = characteristics.reduce(
                                    (acc, current) => {
                                        return [...acc, ...current]
                                    },
                                    []
                                )

                                console.log(temp)

                                const dialog = temp.find(
                                    characteristic =>
                                        characteristic.isWritableWithResponse
                                )
                                if (!dialog) {
                                    reject('No writable characteristic')
                                }
                                resolve(dialog)
                            }
                        })
                    })
                })
            })
        )
        this.deviceConnected.serviceUUIDs = await this.deviceConnected.services().then((services) => services.map((service) => service.uuid))
        console.log("Connected to: " + this.deviceConnected.name+ " - " + this.deviceConnected.id+ " - " + this.deviceConnected.serviceUUIDs)
        console.log(this.Read())
      }
      )
    } catch (error) {
      throw error
    }
  }

  public static async Send(data: Object): Promise<boolean> {
    try {
      JSON.stringify(data).match(/.{1,20}/g)?.map(async (dataPacket) => {
        if (!this.deviceConnected)
          throw new Error("No device connected")

        if (!this.deviceConnected.isConnected())
          throw new Error("Device is not connected")

        this.deviceConnected.writeCharacteristicWithResponseForService(
          this.deviceConnected.serviceUUIDs!![0],
          this.deviceConnected.serviceUUIDs!![1],
          dataPacket
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