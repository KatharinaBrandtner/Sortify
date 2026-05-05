import { View, TextInput, Text, StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

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
    backgroundColor: colors.lighterGray,
    borderRadius: 16,
    borderColor: colors.lightGray,
    borderWidth: 2,
    padding: 16,
    height: 160,
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