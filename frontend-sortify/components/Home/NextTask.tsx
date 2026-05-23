import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { colors } from "../../styles/colors";
import { layout } from "../../styles/layout";
import { nextTasks } from "../../data/homeDummyData";
import { useTasks } from "../../context/TaskContext";

function getCategoryColor(category: string) {
  switch (category) {
    case "Uni":
      return colors.categories.uni;
    case "Arbeit":
      return colors.categories.arbeit;
    case "Haushalt":
      return colors.categories.haushalt;
    case "Freizeit/Privat":
      return colors.categories.freizeit;
    case "Gesundheit":
      return colors.categories.gesundheit;
    case "Organisatorisches":
      return colors.categories.organisatorisches;
    default:
      return colors.purple;
  }
}
export default function NextTasks() {
  const { tasks, toggleTask } = useTasks();

  const visibleTasks = [...tasks, ...nextTasks].slice(0, 4);

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Nächste Aufgaben</Text>

      <View style={styles.card}>
        {visibleTasks.map((task) => {
          const isContextTask = "createdAt" in task;
          const isChecked = "completed" in task ? task.completed : false;

          return (
            <View key={task.id} style={styles.taskRow}>
            <View
              style={[
                styles.categoryLine,
                {
                  backgroundColor:
                    "color" in task ? task.color : getCategoryColor(task.category),
                },
              ]}
            />
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
                  {task.category}
                </Text>
              </View>

              <Pressable
                onPress={() => {
                  if (isContextTask) {
                    toggleTask(task.id);
                  }
                }}
              >
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
  categoryLine: {
    width: 4,
    height: 34,
    borderRadius: 4,
    marginRight: 12,
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