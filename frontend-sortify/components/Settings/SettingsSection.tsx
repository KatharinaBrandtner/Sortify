import { StyleSheet, Text, View } from "react-native";

import { colors } from "../../styles/colors";
import { layout } from "../../styles/layout";

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function SettingsSection({ title, children }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: layout.pageGap,
  },
  sectionTitle: {
    color: colors.purple,
    fontSize: layout.smallTextSize +2,
    fontWeight: "800",
    textTransform: "uppercase",
    marginBottom: layout.sectionLabelBottom,
  },
  content: {
    backgroundColor: colors.white,
    borderRadius: layout.primaryButtonRadius,
    paddingHorizontal: layout.bodyTextSize,
    borderWidth: 1,
    borderColor: colors.lightGray,
  },
});