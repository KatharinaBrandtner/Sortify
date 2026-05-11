import { View, Text, Image, ScrollView, FlatList, Alert } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useState } from "react";

import { globalStyles } from "../styles/globalStyles";
import { CategoryKey } from "../styles/colors";
import { suggestionStyles } from "../styles/suggestionStyles";

import Header from "../components/Header";
import TaskCard from "../components/Suggestion/TaskCard";
import CategoryChip from "../components/Suggestion/CategoryChip";
import MatchCard from "../components/Suggestion/MatchCard";
import NotesInput from "../components/Suggestion/NotesInput";
import PrimaryButton from "../components/PrimaryButton";

import { RootStackParamList } from "../types/types";

export default function SuggestionScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  const params = route.params as RootStackParamList["suggestion"];

  const [selectedCategory, setSelectedCategory] =
    useState<CategoryKey>(params.suggestedCategory);
  const [notes, setNotes] = useState("");

  const baseCategoryOptions = [
    { key: "uni" as const, title: "Uni", icon: "school" as const },
    { key: "arbeit" as const, title: "Arbeit", icon: "briefcase" as const },
    { key: "haushalt" as const, title: "Haushalt", icon: "home" as const },
    { key: "freizeit" as const, title: "Freizeit", icon: "sparkles" as const },
    { key: "gesundheit" as const, title: "Gesundheit", icon: "heart" as const },
    { key: "organisatorisches" as const, title: "Organisatorisches", icon: "cart" as const },
  ];

  const suggestedCategoryOption =
    baseCategoryOptions.find((category) => category.key === params.suggestedCategory) ??
    {
      key: params.suggestedCategory,
      title: params.suggestedCategory,
      icon: "sparkles" as const,
    };

  const categoryOptions = [
    suggestedCategoryOption,
    ...baseCategoryOptions.filter(
      (category) => category.key !== params.suggestedCategory,
    ),
  ];

  const handleShowSaveModal = () => {
    const categoryTitle = (baseCategoryOptions.find((c) => c.key === selectedCategory)?.title) ?? selectedCategory;
    Alert.alert(
      "Aufgabe hinzugefügt",
      `Wir haben den Task «${params.task}» zur Kategorie «${categoryTitle}» hinzugefügt.`,
      [
        {
          text: "Neuen Task hinzufügen",
          onPress: () => {
            console.log(JSON.stringify({ task: params.task, category: selectedCategory }));
            (navigation as any).navigate("(tabs)", { screen: "add-task" });
          },
        },
        {
          text: "Zurück zu Home",
          onPress: () => {
            console.log(JSON.stringify({ task: params.task, category: selectedCategory }));
            (navigation as any).navigate("(tabs)", { screen: "index" });
          },
          style: "default",
        },
      ],
      { cancelable: true },
    );
  };

  return (
    <View style={globalStyles.screenContainer}>
      <Header
        title="Neue Aufgabe"
        showClose={true}
        showSave={true}
        onClose={() => navigation.goBack()}
        onSave={handleShowSaveModal}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
        contentContainerStyle={suggestionStyles.scrollContent}
        keyboardShouldPersistTaps="handled"
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
              categoryKey={item.key}
              active={selectedCategory === item.key}
              onPress={() => setSelectedCategory(item.key)}
            />
          )}
        />

        <MatchCard category={suggestedCategoryOption.key} title={suggestedCategoryOption.title} />

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
            onPress={handleShowSaveModal}
          />
        </View>
      </ScrollView>

      {/* using native Alert on save instead of custom modal */}
    </View>
  );
}
