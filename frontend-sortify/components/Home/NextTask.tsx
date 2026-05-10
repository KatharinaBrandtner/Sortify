import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../styles/colors";
import { nextTasks } from "../../data/homeDummyData";

export default function NextTasks() {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.sectionTitle}>Nächste Aufgaben</Text>
        <Text style={styles.showAll}>Alle anzeigen</Text>
      </View>

      <View style={styles.card}>
        {nextTasks.map((task) => (
          <View key={task.id} style={styles.taskRow}>
            <View style={[styles.dot, { backgroundColor: task.color }]} />

            <View style={styles.taskContent}>
              <Text style={styles.taskTitle}>{task.title}</Text>
              <Text style={styles.taskMeta}>
                {task.category} · {task.due}
              </Text>
            </View>

            <Ionicons name="ellipse-outline" size={22} color={colors.placeholder} />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  sectionTitle: {
    color: colors.purple,
    fontSize: 15,
    fontWeight: "800",
  },
  showAll: {
    color: colors.purple,
    fontSize: 13,
    fontWeight: "600",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    paddingVertical: 8,
    paddingHorizontal: 14,
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
    width: 11,
    height: 11,
    borderRadius: 6,
    marginRight: 12,
  },
  taskContent: {
    flex: 1,
  },
  taskTitle: {
    color: colors.text,
    fontSize: 14,
    fontWeight: "700",
  },
  taskMeta: {
    color: colors.placeholder,
    fontSize: 12,
    marginTop: 2,
  },
});