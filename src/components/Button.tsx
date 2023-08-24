import { TouchableOpacity, Text, View } from "react-native"

export interface ButtonProps {
    text: string,
    theme?: "primary" | "secondary",
    isHover?: boolean,
    onPress: () => void,
    children?: React.ReactNode
}

export default function Button(props: ButtonProps) {
    const colorBg = props.theme === "secondary"? 
        props.isHover? "blue-900" : "blue-200"
        :
        props.isHover? "green-700" : "green-200"

    const colorText = props.theme === "secondary"?
        props.isHover? "blue-200" : "blue-900"
        :
        props.isHover? "green-200" : "green-700"
    return (
        <TouchableOpacity className={`relative -z-10 w-full rounded-xl px-4 py-4 ${"bg-"+colorBg} items-center shadow-md ${"shadow-"+colorText}`}>
            <View className="absolute left-4 bottom-4">{props.children}</View>
            <Text className={`w-full ${"text-"+colorText} text-center text-base`}>{props.text}</Text>
        </TouchableOpacity>
    )
}
