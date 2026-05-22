import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { colors } from "../styles/colors";
import { layout } from "../styles/layout";

export default function PrimaryButton({
  title,
  onPress,
  variant = "primary",
}: {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary";
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        variant === "secondary" && styles.buttonSecondary,
      ]}
      onPress={onPress}
    >
      <Text style={[styles.text, variant === "secondary" && styles.textSecondary]}>{title}</Text>
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
  buttonSecondary: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.purple,
  },
  text: {
    color: colors.white,
    fontWeight: "600",
    fontSize: layout.bodyTextSize,
  },
  textSecondary: {
    color: colors.purple,
  },
});