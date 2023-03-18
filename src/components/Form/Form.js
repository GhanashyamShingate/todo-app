import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Switch,
  Button,
  Keyboard,
  Alert,
} from "react-native";
import styles from "./styles";
import * as database from "../../database";
import { Tasks } from "../Tasks/Tasks";
export default function Form(props) {
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDone, setTaskDone] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const handleAddPress = async () => {
    if (taskDescription) {
      /*console.log("Button Pressed");
      console.log("Descrption:", taskDescription);
      console.log("Status:", taskDone);*/
      const data = {
        taskDescription,
        taskDone,
      };
      const id = await database.save(data);
      console.log("ID", id);
      data.id = id;
      props.onAddTask(taskDescription, taskDone, id);

      setErrorMessage(null);
      setTaskDescription("");
      setTaskDone(false);
      Keyboard.dismiss();
    } else {
      setErrorMessage(
        Alert.alert("Attention", "Task Description Required", [
          {
            text: "OK",
            onPress: () => console.log("OK Pressed"),
            style: "OK",
          },
          // { text: "OK", onPress: () => console.log("OK Pressed") },
        ])
      );
    }
  };
  const handleDescriptionChange = (value) => {
    setTaskDescription(value);
  };
  const handleStatusChange = (value) => {
    setTaskDone(value);
  };
  return (
    <View style={styles.container}>
      <View>
        <Text>{errorMessage}</Text>
      </View>
      <Text>Description</Text>
      <TextInput
        style={styles.setBorder}
        placeholder="Enter a task description"
        maxLength={150}
        onChangeText={handleDescriptionChange}
        defaultValue={taskDescription}
      />
      <View>
        <Text style={{ marginBottom: 10 }}>Completed:</Text>
        <Switch value={taskDone} onValueChange={handleStatusChange} />
      </View>
      <View style={styles.setButton}>
        <Button color="white" title="Add" onPress={handleAddPress} />
      </View>
    </View>
  );
}
