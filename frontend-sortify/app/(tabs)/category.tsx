import { useState } from "react";
import { ScrollView, StyleSheet, View, Pressable, Text } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import { globalStyles } from "../../styles/globalStyles";
import { colors } from "../../styles/colors";
import { categoryOverviewData } from "../../data/categoryDummyData";
import CategoryAccordion from "../../components/Category/CategoryAccordion";
import CategoryActionButton from "../../components/Category/CategoryActionButton";
import AddCategoryModal from "../../components/Category/AddCategoryModal";
import { layout } from "../../styles/layout";
import Header from "../../components/Header";
import { useTasks } from "../../context/TaskContext";

export default function CategoryScreen() {
  const [isAddCategoryVisible, setIsAddCategoryVisible] = useState(false);
  const { openCategory } = useLocalSearchParams();
  const { tasks } = useTasks();

  const openCategoryId = Array.isArray(openCategory)
    ? openCategory[0]
    : openCategory;

  return (
    <View style={[globalStyles.screenContainer, styles.container]}>
      <Header title="Kategorien" />

      <View style={styles.addCategoryRow}>
        <Pressable
          style={styles.addCategoryPill}
          onPress={() => setIsAddCategoryVisible(true)}
        >
          <Ionicons name="add" size={18} color={colors.purple} />
          <Text style={styles.addCategoryText}>Kategorie</Text>
        </Pressable>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {categoryOverviewData.map((category) => {
          const tasksForCategory = tasks
            .filter((task) => task.category === category.title)
            .map((task) => ({
              id: task.id,
              title: task.title,
              completed: task.completed,
            }));

          return (
            <CategoryAccordion
              key={category.id}
              title={category.title}
              color={category.color}
              icon={category.icon as never}
              tasks={tasksForCategory}
              initialExpanded={openCategoryId === category.id}
            />
          );
        })}

        <View style={styles.buttonGroup}>
          <CategoryActionButton
            title="Neue Aufgabe hinzufügen"
            icon="add-circle-outline"
            onPress={() => router.push("/add-task")}
          />
        </View>
      </ScrollView>

      <AddCategoryModal
        visible={isAddCategoryVisible}
        onClose={() => setIsAddCategoryVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 0,
  },
  addCategoryRow: {
    alignItems: "flex-end",
    marginTop: -20,
    marginBottom: layout.sectionLabelBottom + 6,
  },
  addCategoryPill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 999,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.purple,
  },
  addCategoryText: {
    color: colors.purple,
    fontSize: layout.smallTextSize,
    fontWeight: "800",
  },
  scrollContent: {
    paddingBottom: 140,
  },
  buttonGroup: {
    marginTop: 8,
    marginBottom: 130,
  },
});