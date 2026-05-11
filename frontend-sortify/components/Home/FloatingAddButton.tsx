import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { colors } from "../../styles/colors";
import { layout } from "../../styles/layout";

export default function FloatingAddButton() {
  return (
    <Pressable style={styles.button} onPress={() => router.push("/add-task")}>
      <Ionicons name="add" size={34} color="#FFFFFF" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    right: 22,
    bottom: 105,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.purple,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: colors.dark,
    shadowOpacity: 0.18,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
});