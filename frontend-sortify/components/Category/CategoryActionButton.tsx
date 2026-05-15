import { Pressable, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { colors } from "../../styles/colors";
import { layout } from "../../styles/layout";

type Props = {
  title: string;
  icon?: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
};

export default function CategoryActionButton({
  title,
  icon = "add-circle-outline",
  onPress,
}: Props) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Ionicons name={icon} size={26} color={colors.purple} />
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    button: {
        height: 60,
        borderRadius: layout.primaryButtonRadius,
        borderWidth: 2,
        borderColor: colors.purple,
        backgroundColor: "transparent",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
      },
      text: {
        color: colors.purple,
        fontSize: layout.bodyTextSize,
        fontWeight: "800",
      },
});