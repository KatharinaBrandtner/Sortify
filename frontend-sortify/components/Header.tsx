import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../styles/colors";
import { layout } from "../styles/layout";

interface HeaderProps {
  title: string;
  onClose?: () => void;
  onSave?: () => void;
  showClose?: boolean;
  showSave?: boolean;
}

export default function Header({
  title,
  onClose,
  onSave,
  showClose = false,
  showSave = false,
}: HeaderProps) {
  return (
    <View style={styles.container}>
      {showClose ? (
        <TouchableOpacity onPress={onClose}>
          <Ionicons name="close" size={layout.headerIconSize} color={colors.text} />
        </TouchableOpacity>
      ) : (
        <View style={{ width: layout.headerIconSize }} />
      )}

      <Text style={styles.title}>{title}</Text>

      {showSave ? (
        <TouchableOpacity onPress={onSave}>
          <Text
            style={{
              color: colors.purple,
              fontWeight: "600",
              fontSize: layout.bodyTextSize,
            }}
          >
            Speichern
          </Text>
        </TouchableOpacity>
      ) : (
        <View style={{ width: layout.headerIconSize }} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: layout.headerMarginBottom,
  },
  title: {
    fontSize: layout.headerTitleSize,
    fontWeight: "700",
  },
});