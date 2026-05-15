import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { colors } from "../../styles/colors";
import { layout } from "../../styles/layout";

type Props = {
  title: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
};

export default function CategoryTaskItem({
  title,
  completed,
  onToggle,
  onDelete,
}: Props) {
  return (
    <View style={styles.row}>
      <Pressable onPress={onToggle}>
        <Ionicons
          name={completed ? "checkmark-circle" : "ellipse-outline"}
          size={25}
          color={completed ? colors.purple : colors.placeholder}
        />
      </Pressable>

      <Text style={[styles.title, completed && styles.titleCompleted]}>
        {title}
      </Text>

      <Pressable onPress={onDelete}>
        <Ionicons name="trash-outline" size={21} color={colors.placeholder} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    gap: 14,
  },
  title: {
    flex: 1,
    color: colors.text,
    fontSize: layout.bodyTextSize - 1,
    fontWeight: "600",
  },
  titleCompleted: {
    color: colors.placeholder,
    textDecorationLine: "line-through",
  },
});