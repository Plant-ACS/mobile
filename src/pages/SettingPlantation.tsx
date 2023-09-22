import CheckButton from "@components/CheckButton";
import FloatButton from "@components/FloatButton";
import Input from "@components/Input";
import SelectBox from "@components/SelectBox";
import { MaterialIcons } from "@expo/vector-icons";
import { buttonsStyle } from "@styles/buttons";
import { textsStyle } from "@styles/texts";
import { viewsStyle } from "@styles/views";
import { Text, View } from "react-native";

export default function SettingsPlantation() {
    return (
        <>
        <View style={[viewsStyle.form, { position: "absolute", top: 190 }]}>
            <View style={[viewsStyle.group_inputs]}>
                <Text style={textsStyle.subtitle}>Qual é o tipo de plantação</Text>
                <SelectBox options={["Horta", "Lavoura", "Orquidário"]} placeholder="Horta" direction="left" setValue={() => console.log("oi")}></SelectBox>

                <Text style={textsStyle.label}>Quantos ciclos de rega/dia</Text>
                <Input placeholder="0" setValue={(value) => console.log(value)} />

                <Text style={[textsStyle.subtitle_3, {top: 35, marginEnd : -60 }]}>Irrigação inteligente</Text>
                <Text style={[textsStyle.subtitle_3, {top: 60, marginEnd : 30 }]}>Notificação periódica de status</Text>
                <View style = {[buttonsStyle.checkBox, {top : -15, marginEnd : -270}]}>
                    <CheckButton onPress={() => console.log} />
                </View>
                <View style = {[buttonsStyle.checkBox, {top : -2, marginEnd : -270}]}>
                    <CheckButton onPress={() => console.log} />
                </View>
            </View>


        </View>
        <FloatButton theme="secondary" icon="navigate-next" onPress={() => console.log("")} />
        </>
    );
}