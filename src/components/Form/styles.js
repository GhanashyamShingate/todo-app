import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    backgroundColor: "skyblue",
    padding: 10,
    //borderTopColor: "green",
    //borderTopWidth: 3,
  },
  setError: {
    backgroundColor: "white",
    borderColor: "red",
    borderStartWidth: 5,
    borderWidth: 2,
    marginBottom: 10,
    //color: "#FF0000",
    alignItems: "center",
    shadowColor: "green",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  setColorRed: {
    color: "#FF0000",
    backgroundColor: "white",
    marginBottom: 10,
    borderColor: "red",
    borderStartWidth: 60,
    borderWidth: 2,
  },
  setBorder: {
    borderRadius: 3,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "white",
    height: 40,
    marginBottom: 10,
    marginTop: 10,
  },
  setButton: {
    backgroundColor: "#008CBA",
    borderRadius: 20,
    padding: (1, 3),
    marginLeft: 100,
    marginRight: 100,
  },
});
export default styles;
