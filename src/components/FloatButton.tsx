import { MaterialIcons } from "@expo/vector-icons"
import { TouchableOpacity } from "react-native"
import { Icons } from "../types"
import { colors } from "@styles/colors"
export interface FloatButtonProps {
  icon: Icons
  theme?: "primary" | "secondary"
  onPress?: () => void
}

export default function FloatButton(props: FloatButtonProps) {
  const theme = props.theme || "primary" 
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        position: "absolute",
        bottom: 25,
        right: 30,
        padding: 5,
        backgroundColor: theme === "primary" ? colors["green-700"] : colors["blue-700"],
        borderRadius: 18,
      }}
      activeOpacity={0.6}
    >
      <MaterialIcons name={props.icon} size={50} color={theme === "primary" ? colors["green-200"] : colors["blue-200"]} />
    </TouchableOpacity>
  );
}

