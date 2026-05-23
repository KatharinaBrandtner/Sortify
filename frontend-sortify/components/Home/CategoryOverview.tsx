import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { router } from "expo-router";

import CategoryProgressCard from "../CategoryProgressCard";
import { colors } from "../../styles/colors";
import { categoryData } from "../../data/homeDummyData";
import { layout } from "../../styles/layout";
import { useTasks } from "../../context/TaskContext";

export default function CategoryOverview() {
  const [showAll, setShowAll] = useState(false);
  const { tasks } = useTasks();

  const visibleCategories = showAll ? categoryData : categoryData.slice(0, 4);

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.sectionTitle}>Kategorien</Text>

        <Pressable onPress={() => setShowAll((current) => !current)}>
          <Text style={styles.showAll}>
            {showAll ? "Weniger anzeigen" : "Alle anzeigen"}
          </Text>
        </Pressable>
      </View>

      {visibleCategories.map((category) => {
        const addedTasksForCategory = tasks.filter(
          (task) => task.category === category.title
        );

        const addedCompletedTasks = addedTasksForCategory.filter(
          (task) => task.completed
        ).length;

        const updatedCompleted = category.completed + addedCompletedTasks;
        const updatedTotal = category.total + addedTasksForCategory.length;

        return (
          <CategoryProgressCard
            key={category.id}
            title={category.title}
            completed={updatedCompleted}
            total={updatedTotal}
            color={category.color}
            icon={category.icon as never}
            onPress={() =>
              router.push({
                pathname: "/category",
                params: { openCategory: category.id },
              })
            }
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: layout.sectionLabelBottom,
  },
  sectionTitle: {
    color: colors.purple,
    fontSize: layout.smallTextSize +2,
    fontWeight: "800",
    textTransform: "uppercase"},
  showAll: {
    color: colors.purple,
    fontSize: layout.smallTextSize,
    fontWeight: "700",
  },
});