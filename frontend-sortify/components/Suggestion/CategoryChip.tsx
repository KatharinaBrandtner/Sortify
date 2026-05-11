import { Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { categoryColors, colors, CategoryKey } from "../../styles/colors";
import { suggestionStyles } from "../../styles/suggestionStyles";

interface Props {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  categoryKey: CategoryKey;
  active?: boolean;
  onPress: () => void;
}

export default function CategoryChip({
  title,
  icon,
  categoryKey,
  active,
  onPress,
}: Props) {
  const palette = categoryColors[categoryKey];

  return (
    <Pressable
      onPress={onPress}
      android_ripple={{ color: "transparent" }}
      style={[
        suggestionStyles.chip,
        {
          borderColor: palette.border,
          backgroundColor: active ? palette.border : palette.light,
          borderWidth: 1,
        },
      ]}
    >
      <View style={suggestionStyles.chipInner}>
        <View style={suggestionStyles.chipLabelRow}>
          <Ionicons
            name={icon}
            size={18}
            color={active ? colors.white : palette.border}
          />

          <Text
            numberOfLines={1}
            style={{
              color: active ? colors.white : colors.text,
              fontWeight: "600",
              fontSize: 14,
            }}
          >
            {title}
          </Text>
        </View>

        {active && (
          <Ionicons
            name="checkmark-circle"
            size={20}
            color={colors.white}
          />
        )}
      </View>
    </Pressable>
  );
}