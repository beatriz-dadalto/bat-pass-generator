import React from "react";
import {
  Pressable,
  Text,
} from "react-native";

import { styles } from "./BatButtonStyles";
import { BatTextInput } from "../BatTextInput/BatTextInput";
import generatePassword from "../../services/passwordService";
import * as Clipboard from "expo-clipboard";

type BatButtonProps = {
  passwordLength: number;
};

export function BatButton({ passwordLength }: BatButtonProps) {
  const [password, setPassword] = React.useState("");

  function handleGenerateButton() {
    let generatedPassword = generatePassword(passwordLength);
    setPassword(generatedPassword);
  }

  function handleCopyButton() {
    Clipboard.setStringAsync(password);
  }

  return (
    <>
      <BatTextInput password={password} />
      <Pressable style={styles.button} onPress={handleCopyButton}>
        <Text style={styles.text}>COPIAR</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={handleGenerateButton}>
        <Text style={styles.text}>GENERATE</Text>
      </Pressable>
    </>
  );
}
