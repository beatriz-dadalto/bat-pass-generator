import React from "react";
import { Text, TextInput, TextProps } from "react-native";

import { styles } from "./BatTextInputStyles";

interface BatTextInputProps {
  password: string;
}

export function BatTextInput({ password }: BatTextInputProps) {

  return (
    <TextInput
      style={styles.inputer}
      placeholder="password"
      value={password}
    />
  );
}
