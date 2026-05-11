import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AddTaskScreen from "./screens/AddTaskScreen";
import SuggestionScreen from "./screens/SuggestionScreen";

export default function App() {
  const [screen, setScreen] = useState<"home" | "add" | "suggestion">("home");
  const [suggestionTask, setSuggestionTask] = useState<string>("");

  if (screen === "add") {
    return (
      <AddTaskScreen
        onSubmit={(task: string) => {
          setSuggestionTask(task);
          setScreen("suggestion");
        }}
      />
    );
  }

  if (screen === "suggestion") {
    return (
      <SuggestionScreen
        task={suggestionTask}
        onBack={() => setScreen("add")}
      />
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Screen</Text>

      <TouchableOpacity onPress={() => setScreen("add")}>
        <Text style={{ color: "blue", marginTop: 20 }}>
          ➕ Go to Add Task Screen
        </Text>
      </TouchableOpacity>
    </View>
  );
}