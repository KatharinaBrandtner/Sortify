import { View, Text } from "react-native";
import { colors } from "../../styles/colors";

export default function TaskCard({
  task,
}: {
  task: string;
}) {
  return (
    <View
      style={{
        backgroundColor: colors.white,
        borderRadius: 24,
        padding: 20,
        marginTop: 20,
      }}
    >
      <Text
        style={{
          color: colors.purple,
          fontSize: 12,
          fontWeight: "700",
          marginBottom: 14,
        }}
      >
        DEINE AUFGABE
      </Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: colors.text,
            fontWeight: "500",
            flex: 1,
          }}
        >
          {task}
        </Text>
      </View>
    </View>
  );
}