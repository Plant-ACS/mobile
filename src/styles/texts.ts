import { StyleSheet } from "react-native"
import { colors } from "./colors"

export const textsStyle = StyleSheet.create({
  title: {
    fontSize: 42,
    fontWeight: "500",
    color: colors["black-900"],
  },
  title_2: {
    fontSize: 35,
    fontWeight: "500",
    color: colors["black-900"],
  },
  title_3: {
    fontSize: 30,
    fontWeight: "500",
    color: colors["black-900"],
  },

  subtitle: {
    fontSize: 26,
    fontWeight: "300",
    color: colors["black-900"],
  },
  subtitle_2: {
    fontSize: 23,
    fontWeight: "300",
    color: colors["black-900"],
  },
  subtitle_3: {
    fontSize: 20,
    fontWeight: "300",
    color: colors["black-900"],
  },
  text_xl: {
    fontSize: 20,
    fontWeight: "400",
    color: colors["black-900"],
  },
  text: {
    fontSize: 18,
    fontWeight: "400",
    color: colors["black-900"],
  },
  text_sm: {
    fontSize: 16,
    fontWeight: "400",
    color: colors["black-900"],
  },
  link: {
    color: colors["blue-500"],
    fontWeight: "200",
  }
})