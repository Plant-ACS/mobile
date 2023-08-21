import { TouchableOpacity, Text, View } from "react-native"

export interface ButtonProps {
    text: string,
    theme: "primary" | "secondary",
    isHover?: boolean,
    onPress: () => void,
    children?: React.ReactNode
}

export default function Button(props: ButtonProps) {
    let styleBg
    let styleText
    if (props.isHover === true) {

        styleBg = props.theme === 'primary' ? 'green-700' : 'blue-900'
        styleText = props.theme === 'primary' ? 'green-200' : 'blue-200'
    }
    else {
        styleBg = props.theme === 'primary' ? 'green-200' : 'blue-200'
        styleText = props.theme === 'primary' ? 'green-700' : 'blue-900'
    }
    return (
        <TouchableOpacity className={`w-full rounded-xl px-2 py-4 bg-${styleBg} items-center shadow-md shadow-${styleText}`}>
            <View>{props.children}</View>
            <Text className={`w-full text-${styleText} text-center text-base`}>{props.text}</Text>
        </TouchableOpacity>
    )
}
