import { GestureResponderEvent, TouchableOpacity, View } from "react-native"

export interface FloatButtonProps {
  isChecked?: boolean;
  onPress: (e: GestureResponderEvent) => void;
}

export default function CheckButton({ isChecked, onPress }: FloatButtonProps) {
  return (
    <TouchableOpacity className={`w-10 h-10 rounded-xl border-4 bg-gray-400 border-gray-700 p-1`}>
      <View className="bg-gray-800 rounded-lg w-full h-full" />
    </TouchableOpacity>
  );
}