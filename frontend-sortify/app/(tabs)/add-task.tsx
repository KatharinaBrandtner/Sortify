import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";

import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { globalStyles } from "../../styles/globalStyles";
import { RootStackParamList } from "../../types/types";

import Header from "../../components/Header";
import TaskInput from "../../components/AddTask/TaskInput";
import PrimaryButton from "../../components/PrimaryButton";
import InfoCard from "../../components/AddTask/InfoCard";

import { classifyTask } from "../../services/api";

type AddTaskNavigationProp =
  NativeStackNavigationProp<
    RootStackParamList,
    "(tabs)"
  >;

export default function AddTaskScreen() {
  const [task, setTask] = useState("");
  const [loading, setLoading] = useState(false);

  const navigation =
    useNavigation<AddTaskNavigationProp>();

  const handleSubmit = async () => {

    if (!task.trim()) {
      Alert.alert(
        "Fehler",
        "Bitte gib eine Aufgabe ein."
      );
      return;
    }

    try {

      setLoading(true);

      // API CALL
      const result = await classifyTask(task);

      if (!result) {
        Alert.alert(
          "API Fehler",
          "Die Kategorie konnte nicht geladen werden."
        );
        return;
      }

      // Navigation zum Suggestion Screen
      navigation.navigate("suggestion", {
        task: task,
        suggestedCategory: result.category,
      });

      // Input zurücksetzen
      setTask("");

    } catch (error) {

      console.log(error);

      Alert.alert(
        "Fehler",
        "Etwas ist schiefgelaufen."
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      accessible={false}
    >
      <View style={globalStyles.screenContainer}>

        <Header title="Neue Aufgabe" />

        <Image
          source={require("../../assets/puzzle-add-screen.png")}
          style={{
            width: 140,
            height: 120,
            alignSelf: "center",
            marginTop: 40,
          }}
        />

        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            marginTop: 20,
            fontWeight: "bold",
          }}
        >
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
          Schreibe deine Aufgabe und wir finden
          {"\n"}
          die passende Kategorie.
        </Text>

        <TaskInput
          value={task}
          onChange={setTask}
        />

        <View style={{ marginTop: 20 }}>
          <PrimaryButton
            title={
              loading
                ? "Kategorie wird erkannt..."
                : "Aufgabe abschicken"
            }
            onPress={handleSubmit}
          />
        </View>

        <InfoCard />

      </View>
    </TouchableWithoutFeedback>
  );
}