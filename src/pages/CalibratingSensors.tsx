import Header from "@components/Header";
import { MaterialIcons } from "@expo/vector-icons";
import { textsStyle } from "@styles/texts";
import { colors } from "@styles/colors";
import { Text, View } from "react-native";
import { viewsStyle } from "@styles/views";
import { buttonsStyle } from "@styles/buttons";
import FloatButton from '@components/FloatButton';
import HumiditySensor from "@components/sensors/HumiditySensor";
export default function CalibratingSensors() {
    return (
        <>
            <Header style={[{ alignItems: "center", width: "100%", height: 150, justifyContent: "flex-start", position: "relative" }]}>
                <Text style={[textsStyle.title_3, { top: 60 }]}>Sensor de umidade</Text>
                <View style={{ position: "absolute", bottom:-60}}>
               < HumiditySensor/>
                </View>
            </Header>

            <View style = {viewsStyle.form}>
                    <Text style={[textsStyle.text_xl, {top : 150}]}>Coloque o seu sensor em uma terra que esteja extremamente seca</Text>

                    <Text style={[textsStyle.text_xl, {top : -30}]}>Agora coloque em uma terra que esteja úmida</Text>

                    <Text style={[textsStyle.text_xl, {top : -200}]}>Agora coloque em uma terra que esteja extremamente úmida</Text>
            </View>

            <View style = {buttonsStyle.button_full}>
                <FloatButton icon = 'done' theme = 'secondary'/>
            </View>
        </>
    );
}