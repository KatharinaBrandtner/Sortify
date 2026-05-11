import { View, Text } from "react-native";
import { colors } from "../../styles/colors";
import { Ionicons } from "@expo/vector-icons";

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
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: colors.text,
            fontWeight: "500",
            flex: 1,
          }}
        >
          {task}
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 6,
          }}
        >
          <Ionicons
            name="pencil-outline"
            size={18}
            color={colors.purple}
          />

          <Text
            style={{
              color: colors.purple,
              fontWeight: "600",
            }}
          >
            Bearbeiten
          </Text>
        </View>
      </View>
    </View>
  );
}