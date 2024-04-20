import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainRadioContainer: {
    width: '100%',
  },
  radioLengthContainer: {
    marginBottom: 32,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',

    // borderWidth: 1,
    // borderColor: 'red',
  },
  title: {
    alignSelf: 'flex-start',
    color: '#DF8C3A',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 4,
    letterSpacing: 0.25,
  },
  radioCircleContainer: {
    flexDirection: "row",
    alignItems: "center",
    // borderWidth: 1,
    // borderColor: 'white',
    // margin:4,
  },
  radioOutlineCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderColor: "#537E8B",
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioInnerCircle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#DF8C3A",
  },
  radioText: {
    fontSize: 24,
    marginLeft: 4,
  },
});
