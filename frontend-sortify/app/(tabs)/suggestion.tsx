import { View, Text, StyleSheet } from "react-native";

export default function SuggestionScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Suggestion</Text>
      <Text>Kommt später.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 12,
  },
});