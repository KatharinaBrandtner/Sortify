import { View, Text, Image, ScrollView, FlatList } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useState } from "react";

import { globalStyles } from "../styles/globalStyles";
import { suggestionStyles } from "../styles/suggestionStyles";

import Header from "../components/Header";
import TaskCard from "../components/Suggestion/TaskCard";
import CategoryChip from "../components/Suggestion/CategoryChip";
import MatchCard from "../components/Suggestion/MatchCard";
import NotesInput from "../components/Suggestion/NotesInput";
import PrimaryButton from "../components/PrimaryButton";

import { SuggestionScreenParams } from "../types/types";

export default function SuggestionScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  const params = route.params as SuggestionScreenParams;

  const [selectedCategory, setSelectedCategory] =
    useState(params.suggestedCategory);
  const [notes, setNotes] = useState("");

  const baseCategoryOptions = [
    { title: "Uni", icon: "school" as const },
    { title: "Personal", icon: "person" as const },
    { title: "Work", icon: "briefcase" as const },
    { title: "Other", icon: "ellipsis-horizontal-circle" as const },
    { title: "Einkaufen", icon: "cart" as const },
    { title: "Fitness", icon: "fitness" as const },
    { title: "Zuhause", icon: "home" as const },
    { title: "Gesundheit", icon: "heart" as const },
    { title: "Freizeit", icon: "sparkles" as const },
    { title: "Lernen", icon: "school" as const },
  ];

  const suggestedCategoryOption =
    baseCategoryOptions.find((category) => category.title === params.suggestedCategory) ??
    {
      title: params.suggestedCategory,
      icon: "sparkles" as const,
    };

  const categoryOptions = [
    suggestedCategoryOption,
    ...baseCategoryOptions.filter(
      (category) => category.title !== params.suggestedCategory,
    ),
  ];

  return (
    <View style={globalStyles.screenContainer}>
      <Header
        title="Neue Aufgabe"
        showClose={true}
        showSave={true}
        onClose={() => navigation.goBack()}
        onSave={() => {
          console.log(selectedCategory, notes);
        }}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
        contentContainerStyle={suggestionStyles.scrollContent}
      >
        <View style={suggestionStyles.introRow}>
          <Image
            source={require("../assets/puzzle-suggestion-screen.png")}
            style={suggestionStyles.introImage}
          />

          <View style={suggestionStyles.introCopy}>
            <Text style={suggestionStyles.introTitle}>
              Wir haben eine Kategorie{"\n"}
              für dich vorgeschlagen!
            </Text>

            <Text style={suggestionStyles.introSubtitle}>
              Du kannst sie übernehmen{"\n"}
              oder einfach ändern.
            </Text>
          </View>
        </View>

        <TaskCard task={params.task} />

        <Text style={suggestionStyles.sectionLabel}>
          KATEGORIE WÄHLEN
        </Text>

        <FlatList
          horizontal
          data={categoryOptions}
          keyExtractor={(item) => item.title}
          showsHorizontalScrollIndicator={false}
          style={suggestionStyles.chipsList}
          contentContainerStyle={suggestionStyles.chipsScrollContent}
          renderItem={({ item }) => (
            <CategoryChip
              title={item.title}
              icon={item.icon}
              active={selectedCategory === item.title}
              onPress={() => setSelectedCategory(item.title)}
            />
          )}
        />

        <MatchCard category={params.suggestedCategory} />

        <Text style={suggestionStyles.hintText}>
          Tippe auf eine andere Kategorie,
          um sie auszuwählen.
        </Text>

        <Text style={suggestionStyles.sectionLabel}>
          NOTIZEN (OPTIONAL)
        </Text>

        <NotesInput notes={notes} setNotes={setNotes} />

        <View style={{ marginTop: 28, marginBottom: 40 }}>
          <PrimaryButton
            title="Aufgabe speichern"
            onPress={() => {
              console.log(selectedCategory, notes);
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}