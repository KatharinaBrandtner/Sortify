import { View, Text, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../styles/colors";

export default function HomeHeader() {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("../../assets/sortify-logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.greeting}>Hi Anna! 👋</Text>
        <Text style={styles.subtitle}>Hier ist dein Überblick.</Text>
      </View>

      <View style={styles.iconWrapper}>
        <Ionicons name="notifications-outline" size={24} color={colors.dark} />
        <View style={styles.badge} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  logo: {
    width: 120,
    height: 36,
    marginBottom: 22,
  },
  greeting: {
    color: colors.text,
    fontSize: 24,
    fontWeight: "800",
  },
  subtitle: {
    color: colors.placeholder,
    fontSize: 15,
    marginTop: 4,
  },
  iconWrapper: {
    position: "relative",
    marginTop: 8,
  },
  badge: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
    position: "absolute",
    right: 1,
    top: 1,
  },
});