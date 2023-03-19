import { View, Text, ScrollView } from "react-native";
import styles from "./styles";
import { Task } from "./Task/Task";

export function Tasks(props) {
  //props.tasks = [];
  console.log("Properties", props.tasks);
  return (
    <View style={styles.container}>
      <ScrollView>
        {props.tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            onStatusChange={props.onStatusChange}
            onTaskRemoval={props.onTaskRemoval}
          />
        ))}
      </ScrollView>
    </View>
  );
}
