import { SafeAreaView, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from "./src/Styles/main";
import { Header } from "./src/components/Header/Header";
import { Tasks } from "./src/components/Tasks/Tasks";
import Form from "./src/components/Form/Form";
import uuid from "react-uuid";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
//import tasks from "./src/components/Tasks/Tasks";
function App() {
  const [tasks, setTask] = useState([
    {
      id: uuid(),
      description: "Walk the dog",
      done: true,
    },
    {
      id: uuid(),
      description: "Wash the car",
      done: false,
    },
    {
      id: uuid(),
      description: "Finish the lab",
      done: false,
    },
  ]);

  const handleStatusChange = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task;
    });
    setTask(updatedTasks);
  };
  const onTaskRemoval = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTask(updatedTasks);
  };
  function handleAddTask(taskDescription, taskDone) {
    const updatedTasks = [...tasks];
    updatedTasks.push({
      id: uuid(),
      description: taskDescription,
      done: taskDone,
    });
    setTask(updatedTasks);
  }

  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <Header />

        <Tab.Navigator
          screenOptions={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "skyblue",
              borderBottomColor: "green",
              borderBottomWidth: 3,
            },
            tabBarStyle: { backgroundColor: "skyblue" },
            //tabBarLabelStyle: { color: "black" },
            tabBarActiveTintColor: "green",
            tabBarInactiveTintColor: "black",
          }}
        >
          <Tab.Screen
            name="List"
            options={{
              tabBarIcon: ({ size, color }) => {
                return (
                  <FontAwesome5 name="list-alt" size={size} color={color} />
                );
              },
            }}
          >
            {(props) => (
              <Tasks
                {...props}
                tasks={tasks}
                onStatusChange={handleStatusChange}
                onTaskRemoval={onTaskRemoval}
              />
            )}
          </Tab.Screen>
          <Tab.Screen
            name="Add"
            options={{
              tabBarIcon: ({ size, color }) => {
                return (
                  <MaterialIcons
                    name="playlist-add"
                    size={size}
                    color={color}
                  />
                );
              },
            }}
          >
            {(props) => <Form {...props} onAddTask={handleAddTask} />}
          </Tab.Screen>
        </Tab.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
