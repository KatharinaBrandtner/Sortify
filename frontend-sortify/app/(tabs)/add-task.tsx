import { View, Text, Image, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { globalStyles } from "../../styles/globalStyles";
import { CategoryKey } from "../../styles/colors";
import { RootStackParamList } from "../../types/types";
import Header from "../../components/Header";
import TaskInput from "../../components/AddTask/TaskInput";
import PrimaryButton from "../../components/PrimaryButton";
import InfoCard from "../../components/AddTask/InfoCard";

// Navigationstyp definieren
type AddTaskNavigationProp = NativeStackNavigationProp<RootStackParamList, "(tabs)">;

// Dummy-Klassifizierung: einfache Keyword-basierte Kategorisierung
function classifyTaskDummy(task: string): CategoryKey {
  const taskLower = task.toLowerCase();

  // Dummy Zuordnungen basierend auf Keywords
  const classifiers: Record<CategoryKey, string[]> = {
    uni: ["uni", "schule", "vorlesung", "studium", "lernen", "kurs", "hausaufgabe"],
    arbeit: [
      "projekt",
      "meeting",
      "email",
      "bericht",
      "präsentation",
      "deadline",
      "büro",
      "arbeit",
    ],
    haushalt: [
      "putzen",
      "waschen",
      "kochen",
      "haushalt",
      "reparieren",
      "renovieren",
      "aufräumen",
    ],
    freizeit: ["film", "spiel", "kino", "serie", "game", "hobby", "ausflug"],
    gesundheit: ["arzt", "zahnarzt", "apotheke", "medikament", "termin", "impfung"],
    organisatorisches: [
      "einkaufen",
      "kaufen",
      "shop",
      "lebensmittel",
      "supermarkt",
      "groceries",
      "rechnung",
      "versicherung",
      "notiz",
      "planen",
    ],
  };

  // Durchsuche Keywords und gib erste Übereinstimmung zurück
  for (const [category, keywords] of Object.entries(
    classifiers,
  ) as Array<[CategoryKey, string[]]>) {
    if (keywords.some((keyword) => taskLower.includes(keyword))) {
      return category;
    }
  }

  // Fallback zur Standard-Kategorie
  return "organisatorisches";
}

export default function AddTaskScreen() {
  const [task, setTask] = useState("");
  const navigation = useNavigation<AddTaskNavigationProp>();

  const handleSubmit = () => {
    if (!task.trim()) return;

    // Dummy-Klassifizierung durchführen
    const suggestedCategory = classifyTaskDummy(task);

    // Zur Suggestion-Seite navigieren
    navigation.navigate("suggestion", {
      task: task,
      suggestedCategory: suggestedCategory,
    });

    // Input leeren
    setTask("");
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} accessible={false}>
      <View style={globalStyles.screenContainer}>
        <Header title="Neue Aufgabe" />

        <Image
          source={require("../../assets/puzzle-add-screen.png")}
          style={{ width: 140, height: 120, alignSelf: "center", marginTop: 40 }}
        />

        <Text style={{ textAlign: "center", fontSize: 20, marginTop: 20, fontWeight: "bold" }}>
          Was möchtest du erledigen?
        </Text>

        <Text
          style={{
            textAlign: "center",
            color: "#888",
            marginBottom: 20,
            marginTop: 8,
          }}
        >
          Schreibe deine Aufgabe und wir finden {"\n"} die passende Kategorie.
        </Text>

        <TaskInput value={task} onChange={setTask} />

        <View style={{ marginTop: 20 }}>
          <PrimaryButton
            title="Aufgabe abschicken"
            onPress={handleSubmit}
          />
        </View>

        <InfoCard />
      </View>
    </TouchableWithoutFeedback>
  );
}