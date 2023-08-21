import { TextInput, View } from "react-native"

export interface InputProps {
    placeholder?: string,
    direction?: "start" | "center",
    setValue: (value: string) => void,
}

export default function Input(props: InputProps) {
    const text_aling = "text-" + props.direction || "start"
    return (
        <View className="bg-gray-400 w-full rounded-xl px-2 py-4">
            <TextInput className={`w-full text-base color-gray-700 ${text_aling}`} onChangeText={(e) => props.setValue(e)} placeholder={props.placeholder} />
        </View>
    )
}