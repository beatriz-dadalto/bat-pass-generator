import React from "react";
import { View } from "react-native";
import styles from "./Style";
import { BatLogo } from "../../components/BatLogo/BatLogo";
import { StatusBar } from "expo-status-bar";
import { BatButton } from "../../components/BatButton/BatButton";
import { BatRadioButton } from "../../components/BatRadioButton/BatRadioButton";

export default function Home() {
  const PASSWORD_LENGTH = [8, 12, 16];
  const [selected, setSelected] = React.useState(PASSWORD_LENGTH[0]);

  return (
    <View style={styles.appContainer}>
      <View style={styles.logoContainer}>
        <BatLogo />
      </View>
      <View style={styles.inputContainer}>
        <BatRadioButton
          options={PASSWORD_LENGTH}
          selected={PASSWORD_LENGTH.indexOf(selected)}
          horizontal={true}
          onChangeSelect={(clickedOption) => setSelected(clickedOption)}
        />
        <BatButton passwordLength={selected} />
      </View>
      <StatusBar style="light" />
    </View>
  );
}
