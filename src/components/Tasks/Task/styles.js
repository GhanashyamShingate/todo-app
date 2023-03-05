import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    backgroundColor: "#fff",
    margin: 10,
    padding: 10,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "#bcbcbc",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    //margin: 20,
    backgroundColor: "skyblue",
    borderRadius: 20,
    //padding: 35,
    borderColor: "green",
    borderWidth: 3,
    paddingStart: 20,
    paddingBottom: 20,
    paddingEnd: 10,
    alignItems: "center",
    shadowColor: "green",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  button: {
    borderRadius: 15,
    //padding: 10,
    elevation: 2,
    marginTop: 0,
    marginBottom: 0,
    marginStart: 190,
  },
  row: {
    flexDirection: "row",
    marginTop: 10,
  },
  buttonClose: {
    backgroundColor: "red",
  },
  modaltaskClose: { color: "white", fontWeight: "bold" },

  // container1: {
  //   alignSelf: "stretch",
  //   backgroundColor: "skyblue",
  //   margin: 10,
  //   padding: 10,
  //   borderRadius: 7,
  //   borderWidth: 1,
  //   borderColor: "#bcbcbc",
  // },
  // modaltaskLabel: {
  //   marginBottom: 15,
  //   textAlign: "center",
  // },
});

//export default styles;
