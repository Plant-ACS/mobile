import React, { useState } from "react"
import { Text, View } from "react-native"
import { PageProps } from "../types"
import Button from "@components/Button"
import BaseConnection from "@services/esp32/BaseConnection"
import { colors, textsStyle, viewsStyle } from "@styles/index"


export default function ManualIrrigation({navigation}: PageProps) {
  const [hours, setHours] = useState<number>(0)
  return(
    <View style={[viewsStyle.content, { alignItems: "center" }]}>
      <Text style={[textsStyle.title_2]}>Irrigação Manual</Text>

      <View style={{marginTop: 20, marginBottom: 60}}>
        <Text style={[textsStyle.text_xl, {textAlign: "center"}]}>Status Ligado</Text>
        <Text style={[textsStyle.text_xl, {textAlign: "center"}]}>Tempo decorrido: {hours}h</Text>
        <Text style={[textsStyle.text_xl, {textAlign: "center"}]}>Vazão da água: 0.55L</Text>
      </View>

      <Button style={{ marginTop: 20 }} onPress={ async () => await BaseConnection.Send({name: "start", data: {}})} text={"Iniciar"}></Button>
      <Button style={{ marginTop: 20, backgroundColor: colors["yellow-200"] }} styleText={{color: colors["yellow-900"]}} onPress={ async () => await BaseConnection.Send({name: "end", data: {}})} text={"Encerrar"}></Button>
    </View>
  )
}
