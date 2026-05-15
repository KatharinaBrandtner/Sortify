import { ScrollView, StyleSheet, View, Pressable, Text } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import { globalStyles } from "../../styles/globalStyles";
import { colors } from "../../styles/colors";
import { categoryOverviewData } from "../../data/categoryDummyData";
import CategoryAccordion from "../../components/Category/CategoryAccordion";
import CategoryActionButton from "../../components/Category/CategoryActionButton";
import { layout } from "../../styles/layout";
import Header from "../../components/Header";

export default function CategoryScreen() {
  const handleAddCategory = () => {
    console.log("Neue Kategorie hinzufügen kommt später");
  };

  return (
    <View style={[globalStyles.screenContainer, styles.container]}>
      <Header title="Kategorien" />

      <View style={styles.addCategoryRow}>
        <Pressable style={styles.addCategoryPill} onPress={handleAddCategory}>
          <Ionicons name="add" size={18} color={colors.purple} />
          <Text style={styles.addCategoryText}>Kategorie</Text>
        </Pressable>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {categoryOverviewData.map((category) => (
          <CategoryAccordion
            key={category.id}
            title={category.title}
            color={category.color}
            icon={category.icon as never}
            tasks={category.tasks}
          />
        ))}

        <View style={styles.buttonGroup}>
          <CategoryActionButton
            title="Neue Aufgabe hinzufügen"
            icon="add-circle-outline"
            onPress={() => router.push("/add-task")}
          />
        </View>
      </ScrollView>
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
    backgroundColor: "#FFFFFF",
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