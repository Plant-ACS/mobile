import { useState } from "react";
import { GestureResponderEvent, TouchableOpacity, View } from "react-native"

export interface FloatButtonProps {
  isChecked?: boolean;
  alterValue: (value: boolean) => void;
}

export default function CheckButton({ isChecked, alterValue }: FloatButtonProps) {
  const [checked, setChecked] = useState(isChecked || false);
  return (
    <TouchableOpacity onPress={(e) => { setChecked(!checked); alterValue(checked) }} className={`w-10 h-10 rounded-xl border-4 bg-gray-400 border-gray-700 p-1`}>
      <View className={`${checked && "bg-gray-800"} rounded-lg w-full h-full`} />
    </TouchableOpacity>
  );
}