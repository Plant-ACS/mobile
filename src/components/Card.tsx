import { colors } from "@styles/colors"
import { GestureResponderEvent, StyleProp, TouchableOpacity, ViewStyle } from "react-native"

export interface CardProps {
  style?: StyleProp<ViewStyle>
  onPress?: (e: GestureResponderEvent) => void
  opacity?: number
  children: React.ReactNode
}

export default function Card(props: CardProps) {
  props.opacity = props.opacity || 1
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: colors["gray-400"],
          width: "100%",
          borderRadius: 20,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        },
        props.style,
      ]}
      onPress={props.onPress}
      activeOpacity={props.opacity}
    >
      {props.children}
    </TouchableOpacity>
  )
}
