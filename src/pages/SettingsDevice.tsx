import { View } from 'react-native'
import { viewsStyle } from '@styles/views';
import Input from '@components/Input';
import FloatButton from '@components/FloatButton';
import HumiditySensor from '@components/sensors/HumiditySensor';
import LuminositySensor from '@components/sensors/LuminositySensor';
export default function SettingsDevice() {
    return (
        <>
        <View style={[viewsStyle.form, {justifyContent: "space-around"}]}>
            <View style={{width: "90%", flexDirection: "row", alignItems: "center", gap: 20, marginLeft: -50}}>
                <HumiditySensor />
                <Input setValue={(value) => console.log(value)} placeholder='6, 8, 10'/>
            </View>
            <View style={{width: "90%", flexDirection: "row", alignItems: "center", gap: 20, marginLeft: -50, bottom : 250}}>
                    <LuminositySensor />
                <Input setValue={(value) => console.log(value)} placeholder='3, 5, 7'/>
            </View>
        </View>
        <FloatButton icon='navigate-next' theme='secondary' />
        </>
    );
}