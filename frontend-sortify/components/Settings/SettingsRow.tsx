import { Pressable, StyleSheet, Switch, Text, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { colors } from "../../styles/colors";
import { layout } from "../../styles/layout";

type Props = {
  icon?: keyof typeof Ionicons.glyphMap;
  imageSource?: number;
  title: string;
  subtitle?: string;
  type?: "link" | "switch";
  value?: boolean;
  onValueChange?: (value: boolean) => void;
  onPress?: () => void;
};

export default function SettingsRow({
  icon,
  imageSource,
  title,
  subtitle,
  type = "link",
  value = false,
  onValueChange,
  onPress,
}: Props) {
  return (
    <Pressable
      style={styles.row}
      onPress={type === "link" ? onPress : undefined}
    >
      {imageSource ? (
        <Image source={imageSource} style={styles.imageIcon} resizeMode="contain" />
      ) : (
        icon && (
          <Ionicons
            name={icon}
            size={layout.headerIconSize - 4}
            color={colors.text}
          />
        )
      )}

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>

      {type === "switch" ? (
        <Switch
        style={styles.toggle}
          value={value}
          onValueChange={onValueChange}
          trackColor={{ false: colors.lightGray, true: colors.purple }}
          thumbColor={colors.white}
        />
      ) : (
        <Ionicons
          name="chevron-forward"
          size={layout.headerIconSize - 8}
          color={colors.text}
        />
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    minHeight: 66,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  imageIcon: {
    width: layout.headerIconSize ,
    height: layout.headerIconSize,
  },
  content: {
    flex: 1,
    marginLeft: layout.bodyTextSize,
    justifyContent: "center",
  },
  title: {
    color: colors.text,
    fontSize: layout.bodyTextSize,
    fontWeight: "700",
  },
  subtitle: {
    color: colors.text,
    fontSize: layout.smallTextSize,
    marginTop: 3,
  },
  toggle: {
  marginTop: 17, 
},
});