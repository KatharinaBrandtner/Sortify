import { View, Text } from "react-native";
import { suggestionStyles } from "../../styles/suggestionStyles";

export default function MatchCard({
  category,
}: {
  category: string;
}) {
  return (
    <View style={suggestionStyles.matchCard}>
      <Text style={suggestionStyles.matchLabel}>
        🏷 Vorgeschlagen: {category}
      </Text>

      <Text style={suggestionStyles.matchValue}>✨ 84% Match</Text>
    </View>
  );
}