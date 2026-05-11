import { View, Text } from "react-native";
import { suggestionStyles } from "../../styles/suggestionStyles";
import { categoryColors, CategoryKey } from "../../styles/colors";

export default function MatchCard({
  category,
  title,
}: {
  category: CategoryKey;
  title?: string;
}) {
  const palette = categoryColors[category] ?? { border: "#000000", light: "#ffffff" };

  return (
    <View style={[suggestionStyles.matchCard, { backgroundColor: palette.light }]}>
      <Text style={[suggestionStyles.matchLabel, { color: palette.border }]}>🏷 Vorgeschlagen: {title ?? category}</Text>

      <Text style={[suggestionStyles.matchValue, { color: palette.border }]}>✨ 84% Match</Text>
    </View>
  );
}