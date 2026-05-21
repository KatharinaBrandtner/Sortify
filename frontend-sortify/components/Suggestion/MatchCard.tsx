import { View, Text } from "react-native";
import { suggestionStyles } from "../../styles/suggestionStyles";
import { categoryColors, CategoryKey } from "../../styles/colors";

export default function MatchCard({
  category,
  title,
  matchPercentage,
}: {
  category: CategoryKey;
  title?: string;
  matchPercentage?: number;
}) {
  const palette = categoryColors[category] ?? { border: "#000000", light: "#ffffff" };
  const pct = matchPercentage ?? 84;

  return (
    <View style={[suggestionStyles.matchCard, { backgroundColor: palette.light }]}>
      <Text style={[suggestionStyles.matchLabel, { color: palette.border }]}>🏷 Vorgeschlagen: {title ?? category}</Text>

      <Text style={[suggestionStyles.matchValue, { color: palette.border }]}>{`✨ ${pct}% Match`}</Text>
    </View>
  );
}