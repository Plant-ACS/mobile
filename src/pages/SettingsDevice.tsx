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
        <View style={[viewsStyle.form]}>
            <View style={[inputsStyle.text, { top: 200, marginLeft: 50 }]}>
                <Input setValue={(value) => console.log(value)} />
                <View style={{ marginLeft: -50, top: -80 }}>
                    <HumiditySensor />
                </View>
            </View>
            <View style={[inputsStyle.text, { bottom: 50, marginLeft: 50 }]}>
                <Input setValue={(value) => console.log(value)} />
                <View style={{ marginLeft: -60, top: -80 }}>
                    <LuminositySensor />
                </View>
            </View>
            <View style={[buttonsStyle.button_full, { marginLeft: 70 }]}>
                <FloatButton icon='navigate-next' theme='secondary' />
            </View>
        </View>
    );
}