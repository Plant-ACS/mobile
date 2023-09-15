import { View, Text, ProgressBarAndroid, ProgressBarAndroidBase, ProgressBarAndroidComponent } from "react-native";
import { viewsStyle, colors, textsStyle, inputsStyle } from "../styles";
import Header from "@components/Header";
import { MaterialIcons } from "@expo/vector-icons";
import Input from "@components/Input";

export default function SelectWifi() {
    return (
        <>
            <Header style={[{ alignItems: "center", width: "100%", height: 250, justifyContent: "flex-start" }]} children={undefined}></Header>
            <View style={[{ alignItems: "center" }, { top: -25 },]}>
                <MaterialIcons name="track-changes" size={50} color={colors["black-900"]} style={[{ backgroundColor: "#F0F0F0" }, { borderRadius: 100 }]} />
            </View>

            <View style={[viewsStyle.group_inputs, { justifyContent: "space-between" }]}>
                <Text style={[textsStyle.label]}>Senha</Text>
                <View style={{ width: "90%" }}>
                    <Input placeholder="************" setValue={(value) => console.log(value)} />
                </View>
            </View>

        </>
    )
}