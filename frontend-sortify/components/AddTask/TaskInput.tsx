import { View, TextInput, Text, StyleSheet } from "react-native";
import { colors } from "../../styles/colors";
import { layout } from "../../styles/layout";

export default function TaskInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (text: string) => void;
}) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="z. B. Lernskript für Statistik lesen..."
        placeholderTextColor={colors.placeholder}
        multiline
        value={value}
        onChangeText={onChange}
        style={styles.input}
      />

      <Text style={styles.counter}>{value.length}/200</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: layout.notesRadius,
    borderColor: colors.lightGray,
    borderWidth: 1,
    padding: 16,
    minHeight: 168,
    justifyContent: "space-between",
  },
  input: {
    fontSize: 16,
    flex: 1,
  },
  counter: {
    textAlign: "right",
    color: colors.placeholder,
    fontSize: 12,
  },
});