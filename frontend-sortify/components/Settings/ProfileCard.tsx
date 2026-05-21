import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { colors } from "../../styles/colors";
import { layout } from "../../styles/layout";

export default function ProfileCard() {
  return (
    <View style={styles.card}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>AK</Text>
      </View>

      <View style={styles.profileInfo}>
        <Text style={styles.name}>Anna Keller</Text>
        <Text style={styles.email}>anna.keller@example.com</Text>
      </View>

      <Ionicons name="chevron-forward" size={22} color={colors.text} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.lightPurple,
    borderRadius: layout.primaryButtonRadius,
    padding: layout.bodyTextSize,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: layout.pageGap,
    borderWidth: 1,
    borderColor: colors.lightGray,
  },
  avatar: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: colors.purple,
    alignItems: "center",
    justifyContent: "center",
    marginRight: layout.bodyTextSize,
  },
  avatarText: {
    color: colors.white,
    fontSize: layout.headerTitleSize,
    fontWeight: "800",
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    color: colors.text,
    fontSize: layout.bodyTextSize,
    fontWeight: "800",
  },
  email: {
    color: colors.text,
    fontSize: layout.smallTextSize,
    marginTop: 4,
  },
});