import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

import CategoryProgressCard from "../CategoryProgressCard";
import { colors } from "../../styles/colors";
import { categoryData } from "../../data/homeDummyData";
import { suggestionStyles } from "../../styles/suggestionStyles";
import { layout } from "../../styles/layout";

export default function CategoryOverview() {
  const [showAll, setShowAll] = useState(false);

  const visibleCategories = showAll ? categoryData : categoryData.slice(0, 4);

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={suggestionStyles.sectionLabel}>HEUTE</Text>

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
    marginTop: layout.sectionLabelTop - 10,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: layout.sectionLabelBottom - 2,
  },
  sectionTitle: {
    color: colors.purple,
    fontSize: layout.bodyTextSize,
    fontWeight: "800",
  },
  showAll: {
    color: colors.purple,
    fontSize: layout.smallTextSize,
    fontWeight: "700",
  },
});