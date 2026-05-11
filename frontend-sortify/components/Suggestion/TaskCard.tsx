import { View, Text } from "react-native";
import { colors } from "../../styles/colors";
import { layout } from "../../styles/layout";

export default function TaskCard({
  task,
}: {
  task: string;
}) {
  return (
    <View
      style={{
        backgroundColor: colors.white,
        borderRadius: layout.cardRadius,
        borderWidth: 1,
        borderColor: colors.lightGray,
        padding: 20,
        marginTop: 20,
      }}
    >
        <Text
          style={{
            color: colors.purple,
            fontSize: layout.smallTextSize,
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
              fontSize: layout.bodyTextSize,
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