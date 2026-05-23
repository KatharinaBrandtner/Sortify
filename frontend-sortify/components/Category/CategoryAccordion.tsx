import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import CategoryProgressCard from "../CategoryProgressCard";
import CategoryTaskItem from "./CategoryTaskItem";
import { colors } from "../../styles/colors";
import { layout } from "../../styles/layout";
import { useTasks } from "../../context/TaskContext";

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
  initialExpanded?: boolean;
};

export default function CategoryAccordion({
  title,
  color,
  icon,
  tasks,
  initialExpanded = false,
}: Props) {
  const [expanded, setExpanded] = useState(initialExpanded);

  const { toggleTask, deleteTask } = useTasks();

  useEffect(() => {
    if (initialExpanded) {
      setExpanded(true);
    }
  }, [initialExpanded]);

  const completed = tasks.filter((task) => task.completed).length;
  const total = tasks.length;

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
          {tasks.map((task) => (
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
    backgroundColor: colors.white,
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderBottomLeftRadius: layout.cardRadius,
    borderBottomRightRadius: layout.cardRadius,
    marginTop: -12,
    marginBottom: 12,
  },
});