import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  title: string;
  completed: number;
  total: number;
  color: string;
  icon: keyof typeof Ionicons.glyphMap;
};

export default function CategoryProgressCard({
  title,
  completed,
  total,
  color,
  icon,
}: Props) {
  const progress = total === 0 ? 0 : completed / total;

  return (
    <View style={[styles.card, { backgroundColor: color }]}>
      <View style={styles.iconBox}>
        <Ionicons name={icon} size={28} color="#FFFFFF" />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.count}>
          {completed} / {total} Tasks
        </Text>

        <View style={styles.progressBackground}>
          <View style={[styles.progressFill, { width: `${progress * 100}%` }]} />
        </View>
      </View>

      <View style={styles.circleOne} />
      <View style={styles.circleTwo} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 76,
    borderRadius: 18,
    paddingHorizontal: 18,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  iconBox: {
    width: 42,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  content: {
    flex: 1,
    zIndex: 2,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "800",
  },
  count: {
    color: "#FFFFFF",
    fontSize: 13,
    marginTop: 2,
    marginBottom: 8,
    opacity: 0.9,
  },
  progressBackground: {
    height: 5,
    borderRadius: 8,
    backgroundColor: "rgba(255,255,255,0.45)",
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
  },
  circleOne: {
    position: "absolute",
    right: -10,
    top: 8,
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: "rgba(255,255,255,0.18)",
  },
  circleTwo: {
    position: "absolute",
    right: 20,
    bottom: -18,
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "rgba(255,255,255,0.14)",
  },
});