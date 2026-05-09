import { View, Text, Image } from "react-native";
import { useState } from "react";
import { globalStyles } from "../../styles/globalStyles";
import Header from "../../components/AddTask/Header";
import TaskInput from "../../components/AddTask/TaskInput";
import PrimaryButton from "../../components/AddTask/PrimaryButton";
import InfoCard from "../../components/AddTask/InfoCard";

export default function AddTaskScreen() {
  const [task, setTask] = useState("");

  const handleSubmit = () => {
    // TODO: hier Backend call
    // → classifyTask(task)
    console.log(task);
  };

  return (
    <View style={globalStyles.container}>
      <Header />

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