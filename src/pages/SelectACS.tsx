import { Text, View, StyleSheet } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { colors, textsStyle, viewsStyle } from "../styles"
import Pulse from "@components/animated/Pulse"
import ListView from "@components/ListView"
import Card from "@components/Card"
import { PageProps } from "../types"
import BaseConnection from "../services/esp32/BaseConnection"
import { useEffect, useState } from "react"
import { Device } from "react-native-ble-plx"


const pulseStyle = StyleSheet.create({
  animation: {
    position: "absolute",
    backgroundColor: colors["green-300"],
    borderRadius: 50,
    width: 80,
    height: 80,
    borderColor: colors["green-500"],
    borderWidth: 1.5,
    top: 55
  },
  view: {
    backgroundColor: colors["green-300"],
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderColor: colors["green-500"],
    borderWidth: 1.5,
  }
})


export default function SelectACS({navigation}:PageProps) {
  const [devices, setDevices] = useState<Array<Device>>([])

  function handleScanBluetooths(device: Device) {
    if(!device.isConnectable) return
    if(!device.name?.startsWith("ACS")) return
    if (devices.find(d => d.id === device.id)) return
      setDevices([device, ...devices])
  }

  useEffect(() => {
    BaseConnection.ScanBluetooths(handleScanBluetooths)
    console.log(devices.map(device => device.name))
  }, [devices])

  return(
    <View style={[viewsStyle.content, { alignItems: "center" }]}>
      <Pulse style={[ pulseStyle.view, pulseStyle.animation]} delay={0} />
      <Pulse style={[ pulseStyle.view, pulseStyle.animation]} delay={100} />
      <Pulse style={[ pulseStyle.view, pulseStyle.animation]} delay={500} />
      <Pulse style={[ pulseStyle.view, pulseStyle.animation]} delay={1000} />
      <Pulse style={[ pulseStyle.view, pulseStyle.animation]} delay={2000} />
      <Pulse style={[ pulseStyle.view, pulseStyle.animation]} delay={2150} />
      <View style={[pulseStyle.view, { marginTop: 50 }]}>
          <MaterialIcons name="memory" size={50} color={colors["green-500"]} />
      </View>
        <ListView style={{ marginTop: 120, width: "85%" }}>
          {
            devices.length === 0 &&
              <Card style={{ paddingVertical: 10, marginBottom: 20, backgroundColor: colors["white-900"] }} opacity={0.6}>
                <Text style={textsStyle.subtitle_2}>Buscando dispositivos...</Text>
              </Card>
          }
          {
            devices.map((device, index) =>
              <Card key={index} style={{ paddingVertical: 10, marginBottom: 20 }} opacity={0.5} onPress={async () => {
                await BaseConnection.Connect(device).then(async () => {
                  await BaseConnection.Send({ hello: "world" })
                  await BaseConnection.Disconnect()
                })
              }}>
                <Text style={textsStyle.subtitle_2}>{device.name}</Text>
              </Card>
            )
          }
        </ListView>
    </View>
  )
}