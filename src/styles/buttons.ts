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
    margin: "auto"
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
  selectBox_btn: {
    position: "absolute",
    zIndex: 10,
    width: 58,
    height: "100%",
    backgroundColor: colors["gray-500"],
    opacity: 0.8,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  selectBox_dropBox: {
    position: "absolute",
    top: 52,
    zIndex: 10,
    width: "100%",
    height: "auto",
    maxHeight: 130,
    backgroundColor: colors["gray-400"],
  },
  selectBox_option: {
    zIndex: 20,
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  selectBox_option_label: {
    zIndex: 20,
    fontSize: 16,
    color: colors["gray-700"],
  },
})