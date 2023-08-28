import { StyleSheet } from "react-native"
import { colors } from "./colors"

export const buttonsStyle = StyleSheet.create({
  button_full: {
    position: "relative",
    width: "100%",
    height: 54,
    borderRadius: 15,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  button_children: {
    position: "absolute",
    left: 10,
},
  checkBox: {
    width: 35,
    height: 35,
    borderRadius: 10,
    borderWidth: 4,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors["gray-700"],
    backgroundColor: colors["gray-400"],
  },
  checkBox_checked: {
    width: 19,
    height: 19,
    borderRadius: 5,
    backgroundColor: colors["gray-800"],
  },
  selectBox_dropBox: {
    position: "absolute",
    top: 10,
  }
})