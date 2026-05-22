import { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { colors } from "../../styles/colors";
import { layout } from "../../styles/layout";
import { nextTasks } from "../../data/homeDummyData";
import { suggestionStyles } from "../../styles/suggestionStyles";

export default function NextTasks() {
  const [checkedTaskIds, setCheckedTaskIds] = useState<string[]>([]);

  const toggleTask = (taskId: string) => {
    setCheckedTaskIds((currentIds) =>
      currentIds.includes(taskId)
        ? currentIds.filter((id) => id !== taskId)
        : [...currentIds, taskId]
    );
  };

  return (
    <View style={styles.container}>
     <Text style={styles.sectionTitle}>Nächste Aufgaben</Text>

      <View style={styles.card}>
        {nextTasks.map((task) => {
          const isChecked = checkedTaskIds.includes(task.id);

          return (
            <View key={task.id} style={styles.taskRow}>
              <View style={[styles.dot, { backgroundColor: task.color }]} />

              <View style={styles.taskContent}>
                <Text
                  style={[
                    styles.taskTitle,
                    isChecked && styles.taskTitleChecked,
                  ]}
                >
                  {task.title}
                </Text>

                <Text
                  style={[
                    styles.taskMeta,
                    isChecked && styles.taskMetaChecked,
                  ]}
                >
                  {task.category} · {task.due}
                </Text>
              </View>

              <Pressable onPress={() => toggleTask(task.id)}>
                <Ionicons
                  name={isChecked ? "checkmark-circle" : "ellipse-outline"}
                  size={24}
                  color={isChecked ? colors.purple : colors.placeholder}
                />
              </Pressable>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  sectionTitle: {
    color: colors.purple,
    fontSize: layout.smallTextSize +2,
    fontWeight: "800",
    textTransform: "uppercase"},
  card: {
    marginTop:8,
    backgroundColor: colors.white,
    borderRadius: layout.cardRadius,
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: colors.lightGray,
    shadowColor: colors.dark,
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  taskRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 9,
  },
  dot: {
    width: 4,
    height: 34,
    borderRadius: 4,
    marginRight: 12,
  },
  taskContent: {
    flex: 1,
  },
  taskTitle: {
    color: colors.text,
    fontSize: layout.bodyTextSize - 1,
    fontWeight: "600",
  },
  taskTitleChecked: {
    color: colors.placeholder,
    textDecorationLine: "line-through",
  },
  taskMeta: {
    color: colors.placeholder,
    fontSize: 12,
    marginTop: 2,
  },
  taskMetaChecked: {
    opacity: 0.6,
  },
});