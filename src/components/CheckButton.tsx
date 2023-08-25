import { buttonsStyle } from "../styles/buttons"
import { useState } from "react";
import { TouchableOpacity, View } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { Icons } from "../types"
import { colors } from "@styles/colors";

export interface FloatButtonProps {
  isChecked?: boolean;
  icon?: Icons;
  onPress: (value: boolean) => void;
}

export default function CheckButton(props: FloatButtonProps) {
  const [checked, setChecked] = useState(props.isChecked || false);
  return (
    <TouchableOpacity
      onPress={(e) => { setChecked(!checked); props.onPress(checked) }}
      activeOpacity={0.7}
      style={buttonsStyle.checkBox}
    >
      { checked? props.icon? <MaterialIcons name={props.icon} size={22} color={colors["gray-900"]} /> : <View style={buttonsStyle.checkBox_checked} /> : <></> }
    </TouchableOpacity>
  );
}