import { View, Text, Pressable, Modal, Switch, Alert } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as database from "../../../database";
export function Task(props) {
  console.log("Properties in Task:", props);
  const [showModal, setShowModal] = useState(false);
  const handleModalToggle = () => {
    setShowModal(!showModal);
  };
  const handleStatusChangePress = () => {
    const taskStatus = props.onStatusChange(props.task.id);
    console.log("Task Changed:", taskStatus);

    //id: taskStatus.id;
    const data = {
      taskDone: props.task.done,
    };
    database.update(props.task.id, { taskDone: props.task.done });
  };
  const handleRemovePress = () => {
    Alert.alert(
      "Remove Task",
      "This action will permanently delete this task. This action cannot be undone!",
      [
        {
          text: "Confirm",
          onPress: async () => {
            props.onTaskRemoval(props.task.id);
            const deleted = await database.remove(props.task.id);
            console.log("Deleted:", deleted);
            setShowModal(false);
          },
        },
        {
          text: "Cancel",
        },
      ]
    );
  };

  return (
    <>
      <Pressable onPress={handleModalToggle}>
        <View style={styles.container}>
          <Text style={styles.title}>
            Description:{props.task.taskDescription}
            {props.task.description}
          </Text>
          <Text style={styles.text}>Id: {props.task.id}</Text>
          <Text style={styles.text}>
            Status:
            {props.task.done ? "Completed" : "Open"}
          </Text>
        </View>
      </Pressable>
      <Modal visible={showModal} transparent={true}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={handleModalToggle}
            >
              <Text style={styles.modaltaskClose}>X</Text>
            </Pressable>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              {props.task.taskDescription}
              {props.task.description}
            </Text>
            <Text
              style={{
                flex: 0,
                height: 2,
                width: 200,
                backgroundColor: "black",
                marginBottom: 10,
                marginTop: 10,
              }}
            >
              -
            </Text>
            <View style={styles.row}>
              <Text>Toggle Status{"  "}</Text>
              <Switch
                value={props.task.done}
                onValueChange={handleStatusChangePress}
              />
            </View>
            <View style={styles.row}>
              <Text>Remove Task{"     "}</Text>
              <Pressable onPress={handleRemovePress}>
                <MaterialCommunityIcons
                  name="delete-forever"
                  size={30}
                  color="#C41E3A"
                />
              </Pressable>
            </View>
          </View>
        </View>

        {/* </View> */}
      </Modal>
    </>
  );
}
// <View style={styles.container}>
//   <Text>{props.task.description}</Text>
//   <Text>ID :{props.task.id}</Text>
//   <Text>Status :{props.task.done ? "completed" : "open"}</Text>
// </View>
// );
//}
