import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { colors } from "../styles/colors";
import { layout } from "../styles/layout";

export default function PrimaryButton({
  title,
  onPress,
}: {
  title: string;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.purple,
    padding: 18,
    borderRadius: layout.primaryButtonRadius,
    alignItems: "center",
  },
  text: {
    color: colors.white,
    fontWeight: "600",
    fontSize: layout.bodyTextSize,
  },
});