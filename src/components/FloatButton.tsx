import { MaterialIcons } from "@expo/vector-icons"
import { TouchableOpacity } from "react-native"
import { Icons } from "../types"
import { colors } from "@styles/colors"
export interface FloatButtonProps {
  icon: Icons
  onPress?: () => void
}

export default function FloatButton(props: FloatButtonProps) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        position: "absolute",
        bottom: 25,
        right: 30,
        padding: 5,
        backgroundColor: colors["green-700"],
        borderRadius: 18,
      }}
      activeOpacity={0.6}
    >
      <MaterialIcons name={props.icon} size={50} color={colors["green-200"]} />
    </TouchableOpacity>
  );
}

