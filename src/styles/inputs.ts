import { StyleSheet } from "react-native"
import { colors } from "./colors"
import { textsStyle } from "./texts"

export const inputsStyle = StyleSheet.create({
  body: {
    width: "100%",
    height: 54,
    borderRadius: 15,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors["gray-400"],
  },
  select_box: {
    position: "relative",
  },
    
  text: {
    width: "100%",
    ...textsStyle.text_xl,
    color: colors["gray-700"],
  },
})