import { View } from 'react-native'
import { viewsStyle } from '@styles/views';
import Input from '@components/Input';
import { inputsStyle } from '@styles/inputs';
import FloatButton from '@components/FloatButton';
import { buttonsStyle } from '@styles/buttons';
import HumiditySensor from '@components/sensors/HumiditySensor';
import LuminositySensor from '@components/sensors/LuminositySensor';
export default function SettingsDevice() {
    return (
        <>
        <View style={[viewsStyle.form, {justifyContent: "space-around"}]}>
            <View style={{width: "90%", flexDirection: "row", alignItems: "center", gap: 20, marginLeft: -50}}>
                <HumiditySensor />
                <Input setValue={(value) => console.log(value)} />
            </View>
            <View style={{width: "80%", flexDirection: "row", alignItems: "center", gap: 20, marginLeft: -70}}>
                    <LuminositySensor />
                <Input setValue={(value) => console.log(value)} />
            </View>
        </View>
        <FloatButton icon='navigate-next' theme='secondary' />
        </>
    );
}