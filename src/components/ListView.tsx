import { colors } from "@styles/colors"
import { ScrollView, StyleProp, ViewStyle } from "react-native"

export interface ListViewProps {
  direction?: "row" | "column"
  style?: StyleProp<ViewStyle>,
  children: React.ReactNode
}

export default function ListView(props: ListViewProps) {
  props.direction = props.direction || "column"
  
  return(
    <ScrollView style={[{flexDirection: props.direction}, props.style]}>
      {props.children}
    </ScrollView>
  )
}