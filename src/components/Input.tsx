import { KeyboardTypeOptions, TextInput, View } from "react-native"
import { inputsStyle } from "../styles"

export interface InputProps {
    placeholder?: string,
    direction?: "start" | "center",
    type?: KeyboardTypeOptions,
    setValue: (value: string) => void,
}

export default function Input(props: InputProps) {
    const text_align = props.direction || "start"
    return (
        <View style={[inputsStyle.body]}>
            <TextInput keyboardType={props.type} style={[inputsStyle.text]} onChangeText={(e) => props.setValue(e)} placeholder={props.placeholder} />
        </View>
    )
}