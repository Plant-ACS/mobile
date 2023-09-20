import React, { useState } from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { buttonsStyle, colors, inputsStyle } from "../styles"
import ListView from "./ListView";

export interface SelectBoxProps {
  default?: number;
  placeholder?: string;
  options: string[] | React.ReactNode[];
  setValue: (key: number, value: string | React.ReactNode) => void
  direction?: "right" | "left" | "center";
}

export default function SelectBox(props: SelectBoxProps) {
  const [value, setValue] = useState<number>(props.default || -1);
  const [isOpened, SetOpened] = useState<boolean>(false);

  props.direction = props.direction === undefined? "left" : props.direction;

  console.log(props.direction)

  const positionFloat = props.direction === "left"? { right: 0 } : { left: 0 }

  const btn = (
    <TouchableOpacity
      onPress={() => SetOpened(!isOpened)}
      style={[buttonsStyle.selectBox_btn, positionFloat,]}
    >
      <MaterialIcons name="keyboard-arrow-down" size={30} color={"#3F3D3B"} />
    </TouchableOpacity>
  );
  return (
    <>
      <View style={[inputsStyle.body, inputsStyle.select_box, {zIndex: 1000}]}>
        { btn }
        <Text style={[inputsStyle.text, {textAlign: props.direction}]}>
          { props.options[value] || props.placeholder }
        </Text>
        { isOpened && (
          <ListView style={buttonsStyle.selectBox_dropBox}>
            { props.options.map((option, key) => (
              <TouchableOpacity
                key={key}
                style={buttonsStyle.selectBox_option}
                onPress={() => {
                  setValue(key);
                  props.setValue(key, option);
                  SetOpened(false);
                }}
              >
                { 
                  typeof option === "string"?
                    <Text style={buttonsStyle.selectBox_option_label}>{option}</Text>
                  :
                    option
                }
              </TouchableOpacity>
            )) }
          </ListView>
        ) }
      </View>
    </>
  );
}