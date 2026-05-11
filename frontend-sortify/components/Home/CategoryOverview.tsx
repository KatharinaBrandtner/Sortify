import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

import CategoryProgressCard from "../CategoryProgressCard";
import { colors } from "../../styles/colors";
import { categoryData } from "../../data/homeDummyData";

export default function CategoryOverview() {
  const [showAll, setShowAll] = useState(false);

  const visibleCategories = showAll ? categoryData : categoryData.slice(0, 4);

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.sectionTitle}>Heute</Text>

        <Pressable onPress={() => setShowAll((current) => !current)}>
          <Text style={styles.showAll}>
            {showAll ? "Weniger anzeigen" : "Alle anzeigen"}
          </Text>
        </Pressable>
      </View>

      {visibleCategories.map((category) => (
        <CategoryProgressCard
          key={category.id}
          title={category.title}
          completed={category.completed}
          total={category.total}
          color={category.color}
          icon={category.icon as never}
        />
      ))}
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
    marginBottom: 10,
  },
  sectionTitle: {
    color: colors.purple,
    fontSize: 15,
    fontWeight: "800",
  },
  showAll: {
    color: colors.purple,
    fontSize: 13,
    fontWeight: "700",
  },
});