import React, { useState } from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { buttonsStyle, inputsStyle } from "../styles"

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

  const btn = (
    <TouchableOpacity
      onPress={() => SetOpened(!isOpened)}
      style={[buttonsStyle.selectBox_dropBox, {left: props.direction === "right"? "auto" : 10, right: props.direction === "left"? "auto" : 10}]}
    >
      <MaterialIcons name="keyboard-arrow-down" size={30} color={"#3F3D3B"} />
    </TouchableOpacity>
  );
  return (
    <>
      <View style={[inputsStyle.body, inputsStyle.select_box]}>
        { btn }
        <Text style={[inputsStyle.text, {textAlign: props.direction}]}>
          { props.options[value] || props.placeholder }
        </Text>
        { isOpened && (
          <View>
            { props.options.map((option, key) => (
              <TouchableOpacity
                key={key}
                onPress={() => {
                  setValue(key);
                  props.setValue(key, option);
                  SetOpened(false);
                }}
              >
                { 
                  typeof option === "string"?
                    <Text>{option}</Text>
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