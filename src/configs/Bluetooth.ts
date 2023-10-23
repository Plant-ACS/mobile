import { useMemo, useState } from "react"
import { PermissionsAndroid, Platform } from "react-native";
import { BleManager, Device } from "react-native-ble-plx"
import * as ExpoDevice from "expo-device";
const bleManager = new BleManager();

export function ScannBluetooths(){
    bleManager.startDeviceScan(
        null, null,
        (error,devices) =>{
            console.log(devices)
        }
    )
}