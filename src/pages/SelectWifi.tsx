import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { viewsStyle, colors, textsStyle, inputsStyle } from "../styles";
import Header from "@components/Header";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import Input from "@components/Input";
import { useState } from "react";

export default function SelectWifi() {

    const [wifis, setWifis] = useState<Array<{ ssid: string, rssi: number, secret: boolean }>>([{
        ssid: "setWifis",
        rssi: -1,
        secret: false
    }])
    return (
        <>
            <Header style={[{ alignItems: "center", width: "100%", height: 240, justifyContent: "flex-start", position: "relative" }]}>
                {
                    wifis?.map((wifis, key) => (
                        <TouchableOpacity
                            key={key}
                            activeOpacity={0.8}
                            style={{padding: 10, marginLeft:-300}}
                        >
                            {wifis.rssi >= -35 ? <MaterialCommunityIcons name="wifi-strength-4" size={30}/> : 
                            wifis.rssi >= -51 ? <MaterialCommunityIcons name = "wifi-strength-3" size={30}/> : 
                            wifis.rssi >= -67 ? <MaterialCommunityIcons name="wifi-strength-2" size={30}/> : <MaterialCommunityIcons name = "wifi-strength-1" size={30}/> }
                        </TouchableOpacity>
                    ))
                }
                <MaterialCommunityIcons name="key" size= {30} style ={{marginRight : -300, top : -39.5, position : "relative"}}/>
                <View style={{ position: "absolute", bottom: -15, backgroundColor: "#F0F0F0", borderRadius: 20 }}>
                    <MaterialIcons name="track-changes" size={50} color={colors["black-900"]} />
                </View>
            </Header>

            <View style={[viewsStyle.group_inputs, { justifyContent: "space-between", marginTop: 50 }]}>
                <Text style={[textsStyle.label]}>Senha</Text>
                <View style={{ width: "90%" }}>
                    <Input placeholder="************" setValue={(value) => console.log(value)} />
                </View>
            </View>

        </>
    )
}