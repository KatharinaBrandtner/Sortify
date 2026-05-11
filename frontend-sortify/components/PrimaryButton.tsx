import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { colors } from "../styles/colors";

export default function PrimaryButton({
  title,
  onPress,
}: {
  title: string;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title} ✈️</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.purple,
    padding: 18,
    borderRadius: 16,
    alignItems: "center",
  },
  text: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
});