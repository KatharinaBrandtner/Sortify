import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { globalStyles } from "../styles/globalStyles";
import { colors } from "../styles/colors";
import { Ionicons } from "@expo/vector-icons";

interface SuggestionScreenParams {
  task: string;
  suggestedCategory: string;
}

export default function SuggestionScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const params = route.params as SuggestionScreenParams;

  const handleAccept = () => {
    // TODO: Backend call mit akzeptierter Kategorie
    console.log("Aufgabe akzeptiert:", params.task, "→", params.suggestedCategory);
    navigation.goBack();
  };

  const handleReject = () => {
    navigation.goBack();
  };

  return (
    <View style={[globalStyles.container, { paddingTop: 20 }]}>
      {/* Header mit Close Button */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 30,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Kategorie-Vorschlag</Text>
        <TouchableOpacity onPress={handleReject}>
          <Ionicons name="close" size={28} color={colors.text} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Task Anzeige */}
        <View
          style={{
            backgroundColor: colors.background,
            borderRadius: 12,
            padding: 16,
            marginBottom: 24,
            borderWidth: 1,
            borderColor: colors.placeholder,
          }}
        >
          <Text style={{ fontSize: 12, color: colors.placeholder, marginBottom: 8 }}>
            Deine Aufgabe
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "500", color: colors.text }}>
            {params.task}
          </Text>
        </View>

        {/* Suggestion Card */}
        <View style={{ marginBottom: 30 }}>
          <Text style={{ fontSize: 12, color: colors.placeholder, marginBottom: 12 }}>
            Wir schlagen vor:
          </Text>
          <View
            style={{
              backgroundColor: colors.purple,
              borderRadius: 16,
              padding: 24,
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                borderRadius: 50,
                width: 80,
                height: 80,
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 16,
              }}
            >
              <Text style={{ fontSize: 40 }}>
                {getCategoryEmoji(params.suggestedCategory)}
              </Text>
            </View>
            <Text
              style={{
                fontSize: 28,
                fontWeight: "bold",
                color: "white",
                textAlign: "center",
              }}
            >
              {params.suggestedCategory}
            </Text>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={{ gap: 12, marginBottom: 20 }}>
          <TouchableOpacity
            onPress={handleAccept}
            style={{
              backgroundColor: colors.purple,
              borderRadius: 12,
              paddingVertical: 16,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>
              ✓ Passt perfekt
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleReject}
            style={{
              borderWidth: 2,
              borderColor: colors.purple,
              borderRadius: 12,
              paddingVertical: 16,
              alignItems: "center",
            }}
          >
            <Text style={{ color: colors.purple, fontSize: 16, fontWeight: "600" }}>
              Nein, ändere das
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

// Hilfsfunktion für Kategorie-Emojis
function getCategoryEmoji(category: string): string {
  const emojiMap: { [key: string]: string } = {
    Arbeit: "💼",
    Einkaufen: "🛒",
    Fitness: "💪",
    Zuhause: "🏠",
    Gesundheit: "⚕️",
    Bildung: "📚",
    Unterhaltung: "🎬",
    default: "📋",
  };
  return emojiMap[category] || emojiMap["default"];
}
