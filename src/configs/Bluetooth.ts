import { BleManager, Device } from "react-native-ble-plx"

const bleManager = new BleManager();

export function ScanBluetooths(devices: Array<Device>, setDevices: (devices: Array<Device>) => void) {
    bleManager.startDeviceScan(
        null, null,
        (error,device) =>{
            if(error) return
            if(device && device.name) {
                if(devices.find((d) => d.name === device.name)) return
                setDevices([...devices, device])
            }
        }
    )
}