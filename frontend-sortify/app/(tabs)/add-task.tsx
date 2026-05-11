import { View, Text, Image } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { globalStyles } from "../../styles/globalStyles";
import { RootStackParamList } from "../../types/types";
import Header from "../../components/Header";
import TaskInput from "../../components/AddTask/TaskInput";
import PrimaryButton from "../../components/PrimaryButton";
import InfoCard from "../../components/AddTask/InfoCard";

// Navigationstyp definieren
type AddTaskNavigationProp = NativeStackNavigationProp<RootStackParamList, "(tabs)">;

// Dummy-Klassifizierung: einfache Keyword-basierte Kategorisierung
function classifyTaskDummy(task: string): string {
  const taskLower = task.toLowerCase();

  // Dummy Zuordnungen basierend auf Keywords
  const classifiers: { [key: string]: string[] } = {
    Arbeit: [
      "projekt",
      "meeting",
      "email",
      "bericht",
      "präsentation",
      "deadline",
      "büro",
    ],
    Einkaufen: [
      "einkaufen",
      "kaufen",
      "shop",
      "lebensmittel",
      "supermarkt",
      "groceries",
    ],
    Fitness: ["sport", "training", "gym", "laufen", "yoga", "fitnessstudio"],
    Zuhause: [
      "putzen",
      "waschen",
      "kochen",
      "haushalt",
      "reparieren",
      "renovieren",
    ],
    Gesundheit: ["arzt", "zahnarzt", "apotheke", "medikament", "termin"],
    Bildung: ["lernen", "buch", "kurs", "studieren", "wissen"],
    Unterhaltung: ["film", "spiel", "kino", "serie", "game", "hobby"],
  };

  // Durchsuche Keywords und gib erste Übereinstimmung zurück
  for (const [category, keywords] of Object.entries(classifiers)) {
    if (keywords.some((keyword) => taskLower.includes(keyword))) {
      return category;
    }
  }

  // Fallback zur Standard-Kategorie
  return "Allgemeines";
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
  );
}