import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./BatRadioButtonStyles";

type BatRadioButtonProps = {
  options: number[];
  selected: number;
  horizontal: boolean;
  onChangeSelect: (clickedOption: number) => void;
};

export function BatRadioButton({
  options,
  selected,
  horizontal = false,
  onChangeSelect,
}: BatRadioButtonProps) {
  return (
    <View
      style={[
        styles.mainRadioContainer,
        {
          flexDirection: horizontal ? "row" : "column",
          marginLeft: horizontal ? 10 : 0,
          marginTop: horizontal ? 0 : 10,
        },
      ]}
    >
      <View style={styles.radioLengthContainer}>
        <Text style={styles.title}>choose password length</Text>
        {options.map((clickedOption, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.radioCircleContainer,
              { marginRight: horizontal ? 4 : 0 },
            ]}
            onPress={() => onChangeSelect(clickedOption)}
          >
            <View style={styles.radioOutlineCircle}>
              {selected === index && <View style={styles.radioInnerCircle} />}
            </View>
            <Text
              style={[
                styles.radioText,
                { color: selected === index ? "#DF8C3A" : "#537E8B" },
              ]}
            >
              {clickedOption}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
