import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AddTaskScreen from "./screens/AddTaskScreen";

export default function App() {
  const [showAddScreen, setShowAddScreen] = useState(false);

  if (showAddScreen) {
    return <AddTaskScreen />;
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Screen</Text>

      <TouchableOpacity onPress={() => setShowAddScreen(true)}>
        <Text style={{ color: "blue", marginTop: 20 }}>
          ➕ Go to Add Task Screen
        </Text>
      </TouchableOpacity>
    </View>
  );
}