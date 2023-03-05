import { View, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "./styles";

export const Header = () => {
  return (
    <View style={styles.container}>
      <FontAwesome5 name="tasks" size={24} />
      <Text>Todo App </Text>
      <Text>by Ghanashyam</Text>
    </View>
  );
};
