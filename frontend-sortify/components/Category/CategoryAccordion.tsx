import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import CategoryProgressCard from "../CategoryProgressCard";
import CategoryTaskItem from "./CategoryTaskItem";

type Task = {
  id: string;
  title: string;
  completed: boolean;
};

type Props = {
  title: string;
  color: string;
  icon: keyof typeof Ionicons.glyphMap;
  tasks: Task[];
};

export default function CategoryAccordion({
  title,
  color,
  icon,
  tasks,
}: Props) {
  const [expanded, setExpanded] = useState(false);
  const [localTasks, setLocalTasks] = useState(tasks);

  const completed = localTasks.filter((task) => task.completed).length;
  const total = localTasks.length;

  const toggleTask = (taskId: string) => {
    setLocalTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId: string) => {
    setLocalTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskId)
    );
  };

  return (
    <View style={styles.wrapper}>
      <CategoryProgressCard
        title={title}
        completed={completed}
        total={total}
        color={color}
        icon={icon}
        onPress={() => setExpanded((current) => !current)}
        rightIcon={expanded ? "chevron-up" : "chevron-down"}
      />

      {expanded && (
        <View style={styles.taskList}>
          {localTasks.map((task) => (
            <CategoryTaskItem
              key={task.id}
              title={task.title}
              completed={task.completed}
              onToggle={() => toggleTask(task.id)}
              onDelete={() => deleteTask(task.id)}
            />
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 4,
  },
  taskList: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    marginTop: -12,
    marginBottom: 12,
  },
});