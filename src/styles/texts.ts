import { StyleSheet } from "react-native"
import { colors } from "./colors"

export const textsStyle = StyleSheet.create({
  title: {
    fontFamily: "Quicksand-Bold",
    fontSize: 35,
    color: colors["black-900"],
  },
  title_2: {
    fontFamily: "Quicksand-Bold",
    fontSize: 30,
    color: colors["black-900"],
  },
  title_3: {
    fontFamily: "Quicksand-Bold",
    fontSize: 23,
    color: colors["black-900"],
  },

  label: {
    fontFamily: "Quicksand",
    fontSize: 22.5,
    fontWeight: "300",
    color: colors["black-900"]
  },

  subtitle: {
    fontFamily: "Quicksand",
    fontSize: 23,
    fontWeight: "300",
    color: colors["black-900"],
  },
  subtitle_2: {
    fontFamily: "Quicksand",
    fontSize: 20,
    fontWeight: "300",
    color: colors["black-900"],
  },
  subtitle_3: {
    fontFamily: "Quicksand",
    fontSize: 18,
    fontWeight: "300",
    color: colors["black-900"],
  },
  text_xl: {
    fontFamily: "Quicksand",
    fontSize: 18,
    fontWeight: "400",
    color: colors["black-900"],
  },
  text: {
    fontFamily: "Quicksand",
    fontSize: 16,
    fontWeight: "400",
    color: colors["black-900"],
  },
  text_sm: {
    fontFamily: "Quicksand",
    fontSize: 12,
    fontWeight: "400",
    color: colors["black-900"],
  },
  link: {
    fontFamily: "Quicksand",
    color: colors["blue-500"],
    fontWeight: "200",
  }, 
  
  bold: {
    fontFamily: "Quicksand-Bold",
  }
})