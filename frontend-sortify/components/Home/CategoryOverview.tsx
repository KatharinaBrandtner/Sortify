import { View, Text, StyleSheet } from "react-native";
import CategoryProgressCard from "../CategoryProgressCard";
import { colors } from "../../styles/colors";
import { categoryData } from "../../data/homeDummyData";

export default function CategoryOverview() {
  return (
    <View>
      <Text style={styles.sectionTitle}>Heute</Text>

      {categoryData.map((category) => (
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
  sectionTitle: {
    color: colors.purple,
    fontSize: 15,
    fontWeight: "800",
    marginBottom: 10,
  },
});