import { StyleProp, View, ViewStyle } from "react-native"

export interface HeaderProps {
  style?: StyleProp<ViewStyle>,
  children: React.ReactNode
}

export default function Header(props: HeaderProps) {
  return(
    <View style={{
      backgroundColor: "#F0F0F0",
      paddingHorizontal: 20,
      paddingTop: 15,
      paddingBottom: 22,
      borderBottomStartRadius: 30,
      borderBottomEndRadius: 30,
    }}>
      {props.children}
    </View>
  )
}