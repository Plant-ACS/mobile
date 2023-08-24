import React, { useState } from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

export interface SelectBoxProps {
  default?: number;
  placeholder?: string;
  options: string[] | React.ReactNode[];
  setValue: (key: number, value: string | React.ReactNode) => void;
  direction?: "start" | "left" | "center";
}

export default function SelectBox(props: SelectBoxProps) {
  const [value, setValue] = useState<number>(props.default || -1);
  const [isOpened, SetOpened] = useState<boolean>(false);
  const text_align = "text-" + props.direction || "start";
  const btn = (
    <TouchableOpacity className={`absolute w-[50] z-10 flex flex-row justify-center items-center h-[56] top-0 bg-slate-50 rounded-2xl ${props.direction === "start"? "left-0" : "right-0"}`} onPress={() => SetOpened(!isOpened)}>
      <MaterialIcons name="keyboard-arrow-down" size={30} color={"#3F3D3B"} />
    </TouchableOpacity>
  );
  return (
    <>
      <View className="relative bg-gray-400 w-full flex-row rounded-2xl py-4">
        { btn }
        <Text className={`w-full mx-2 text-base color-gray-700 ${text_align}`}>
          { props.options[value] || props.placeholder }
        </Text>
        { isOpened && (
          <View className="absolute z-20 w-full bg-gray-500 rounded-2xl shadow-md mt-2 top-10">
            { props.options.map((option, key) => (
              <TouchableOpacity
                key={key}
                className="w-full px-2 py-4"
                onPress={() => {
                  setValue(key);
                  props.setValue(key, option);
                  SetOpened(false);
                }}
              >
                { 
                  typeof option === "string"?
                    <Text className="text-base color-gray-700">{option}</Text>
                  :
                    option
                }
              </TouchableOpacity>
            )) }
          </View>
        ) }
      </View>
    </>
  );
}