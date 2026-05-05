import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Header({ onClose }: { onClose?: () => void }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onClose}>
        <Text style={styles.close}>✕</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Neue Aufgabe</Text>

      <View style={{ width: 24 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
  close: {
    fontSize: 18,
  },
});