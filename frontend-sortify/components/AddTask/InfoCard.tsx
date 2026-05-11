import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export default function InfoCard() {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>✨</Text>
      </View>

      <Text style={styles.text}>
        Wir schlagen dir nach dem Absenden die beste Kategorie vor.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center", // vertikal zentriert
    marginTop: 40,
  },
  iconContainer: {
    marginRight: 10,
  },
  icon: {
    fontSize: 18,
  },
  text: {
    flex: 1,
    color: colors.placeholder,
    fontSize: 14,
    lineHeight: 20,
  },
});