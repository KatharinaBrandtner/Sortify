import { TouchableOpacity, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../styles/colors";
import { suggestionStyles } from "../../styles/suggestionStyles";

interface Props {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  active?: boolean;
  onPress: () => void;
}

export default function CategoryChip({
  title,
  icon,
  active,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        suggestionStyles.chip,
        active && suggestionStyles.chipActive,
      ]}
    >
      <View style={suggestionStyles.chipInner}>
        <View style={suggestionStyles.chipLabelRow}>
          <Ionicons
            name={icon}
            size={18}
            color={active ? colors.white : colors.purple}
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
    </TouchableOpacity>
  );
}