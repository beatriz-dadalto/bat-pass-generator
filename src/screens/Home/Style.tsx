import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    flexDirection: "column",
    paddingVertical: 20,
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 60,
    backgroundColor: "#111",
  },
  inputContainer: {
    width: "75%",
    flexDirection: "column",
    alignItems: "center",
  },
});

export default styles;
