import { buttonsStyle, colors, textsStyle } from "../styles"
import { TouchableOpacity, Text, View, StyleProp, ViewStyle } from "react-native"

export interface ButtonProps {
    text: string,
    theme?: "primary" | "secondary",
    isHover?: boolean,
    style?: StyleProp<ViewStyle>,
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
        <TouchableOpacity
            style={[buttonsStyle.button_full, {backgroundColor: colors[colorBg]}, props.style]}
            activeOpacity={0.8}
            onPress={props.onPress}
        >
            <View style={buttonsStyle.button_children}>{props.children}</View>
            <Text style={[textsStyle.subtitle_2, {color: colors[colorText]}]}>{props.text}</Text>
        </TouchableOpacity>
    )

}