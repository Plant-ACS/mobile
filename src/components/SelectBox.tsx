import React, { useState } from "react"
import { View, Text } from "react-native"

export interface SelectBoxProps {
  default: number;
  options: string[];
  setValue: (value: number) => void;
  direction?: "start" | "center";
}

export default function SelectBox({ default: defaultValue, options, setValue , direction}: SelectBoxProps) {
  const [value, setValueState] = useState(defaultValue || 0);
  const text_align = "text-" + direction || "start"
  return (
    <>
      <View className="bg-gray-400 w-full rounded-xl px-2 py-4">
        <Text className={`w-full text-base color-gray-700 ${text_align}`}></Text>
        <View className="">
          
        </View>
      </View>
    </>
  );
}