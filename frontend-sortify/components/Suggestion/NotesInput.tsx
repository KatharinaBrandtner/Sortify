import { View, TextInput, Text } from "react-native";
import { colors } from "../../styles/colors";
import { suggestionStyles } from "../../styles/suggestionStyles";

export default function NotesInput({
  notes,
  setNotes,
}: {
  notes: string;
  setNotes: (value: string) => void;
}) {
  return (
    <View style={suggestionStyles.notesCard}>
      <TextInput
        placeholder="Füge eine Notiz hinzu..."
        placeholderTextColor={colors.placeholder}
        multiline
        value={notes}
        onChangeText={setNotes}
        style={suggestionStyles.notesInput}
      />

      <Text style={suggestionStyles.notesCounter}>
        {notes.length}/150
      </Text>
    </View>
  );
}