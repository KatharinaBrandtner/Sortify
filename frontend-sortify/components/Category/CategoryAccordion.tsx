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
  isContextTask?: boolean;
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
  const [localTasks, setLocalTasks] = useState<Task[]>(tasks);

  const {
    toggleTask: toggleContextTask,
    deleteTask: deleteContextTask,
  } = useTasks();

  useEffect(() => {
    setLocalTasks(tasks);
  }, [tasks]);

  useEffect(() => {
    if (initialExpanded) {
      setExpanded(true);
    }
  }, [initialExpanded]);

  const completed = localTasks.filter((task) => task.completed).length;
  const total = localTasks.length;

  const handleToggleTask = (task: Task) => {
    if (task.isContextTask) {
      toggleContextTask(task.id);
      return;
    }

    setLocalTasks((currentTasks) =>
      currentTasks.map((currentTask) =>
        currentTask.id === task.id
          ? { ...currentTask, completed: !currentTask.completed }
          : currentTask
      )
    );
  };

  const handleDeleteTask = (task: Task) => {
    if (task.isContextTask) {
      deleteContextTask(task.id);
      return;
    }

    setLocalTasks((currentTasks) =>
      currentTasks.filter((currentTask) => currentTask.id !== task.id)
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
              onToggle={() => handleToggleTask(task)}
              onDelete={() => handleDeleteTask(task)}
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