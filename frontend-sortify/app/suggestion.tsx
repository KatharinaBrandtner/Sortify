import { useState, useEffect } from "react";

import {
  View,
  Text,
  Image,
  ScrollView,
  Alert,
  FlatList,
} from "react-native";

import {
  useNavigation,
  useRoute,
} from "@react-navigation/native";

import { globalStyles } from "../styles/globalStyles";
import { categoryColors, CategoryKey } from "../styles/colors";
import { suggestionStyles } from "../styles/suggestionStyles";

import SuggestionHeader from "../components/Header";
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

  const baseCategoryOptions = [
    { key: "uni" as const, title: "Uni", icon: "school" as const },
    { key: "arbeit" as const, title: "Arbeit", icon: "briefcase" as const },
    { key: "haushalt" as const, title: "Haushalt", icon: "home" as const },
    { key: "freizeit" as const, title: "Freizeit", icon: "heart" as const },
    { key: "gesundheit" as const, title: "Gesundheit", icon: "fitness" as const },
    { key: "organisatorisches" as const, title: "Organisation", icon: "folder" as const },
  ];

  // Map backend-provided category (might be human-readable like "Gesundheit")
  // to an internal CategoryKey (like "gesundheit"). Case-insensitive.
  const isCategoryKey = (k: string): k is CategoryKey => {
    return Object.prototype.hasOwnProperty.call(categoryColors, k);
  };

  const mapToCategoryKey = (val: string): CategoryKey => {
    const normalized = val.trim().toLowerCase();

    // direct key match
    if (isCategoryKey(normalized)) return normalized;

    // try matching against display titles in baseCategoryOptions
    const match = baseCategoryOptions.find((c) => c.title.toLowerCase() === normalized);
    if (match) return match.key;

    // fallback
    return "organisatorisches";
  };

  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>(() => mapToCategoryKey(params.suggestedCategory));

  // Debug logs: incoming prediction and selected category changes
  useEffect(() => {
    console.log("SuggestionScreen params:", { task: params.task, predictedCategory: params.suggestedCategory });
  }, [params.task, params.suggestedCategory]);

  useEffect(() => {
    console.log("Selected category changed:", selectedCategory);
  }, [selectedCategory]);
  const [notes, setNotes] = useState("");


  const suggestedKey: CategoryKey = mapToCategoryKey(params.suggestedCategory);

  const suggestedCategoryOption =
    baseCategoryOptions.find((c) => c.key === suggestedKey) ?? {
      key: suggestedKey,
      title: params.suggestedCategory,
      icon: "sparkles" as const,
    };

  const categoryOptions = [
    suggestedCategoryOption,
    ...baseCategoryOptions.filter((c) => c.key !== suggestedKey),
  ];

  const handleSave = () => {
    const categoryTitle = baseCategoryOptions.find((c) => c.key === selectedCategory)?.title ?? selectedCategory;

    // Debug log for save action: show predicted vs. final assigned category
    console.log("Saving task category:", {
      task: params.task,
      predictedCategory: params.suggestedCategory,
      finalCategory: selectedCategory,
    });

    Alert.alert(
      "Aufgabe hinzugefügt",
      `Wir haben den Task «${params.task}» zur Kategorie «${categoryTitle}» hinzugefügt.`,
      [
        {
          text: "Neuen Task hinzufügen",
          onPress: () => {
            (navigation as any).navigate("(tabs)", { screen: "add-task" });
          },
        },
        {
          text: "Zurück zu Home",
          onPress: () => {
            (navigation as any).navigate("(tabs)", { screen: "index" });
          },
          style: "default",
        },
      ]
    );
  };

  return (
    <View style={globalStyles.screenContainer}>

      <SuggestionHeader title="Vorschlag" showClose onClose={() => navigation.goBack()} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={suggestionStyles.scrollContent}
      >

        <View style={suggestionStyles.introRow}>
          <Image source={require("../assets/puzzle-suggestion.png")} style={suggestionStyles.introImage} />

          <View style={suggestionStyles.introCopy}>
            <Text style={suggestionStyles.introTitle}>Wir haben eine Kategorie{"\n"}für dich vorgeschlagen!</Text>
            <Text style={suggestionStyles.introSubtitle}>Du kannst sie übernehmen oder einfach ändern.</Text>
          </View>
        </View>

        <TaskCard task={params.task} />

        <Text style={suggestionStyles.sectionLabel}>KATEGORIE WÄHLEN</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={suggestionStyles.chipsScrollContent} style={suggestionStyles.chipsList}>
          {categoryOptions.map((opt) => (
            <CategoryChip
              key={opt.key}
              title={opt.title}
              icon={opt.icon}
              categoryKey={opt.key as CategoryKey}
              active={selectedCategory === opt.key}
              onPress={() => setSelectedCategory(opt.key as CategoryKey)}
            />
          ))}
        </ScrollView>

        <MatchCard category={suggestedKey} matchPercentage={params.confidence} />

        <Text style={suggestionStyles.hintText}>Tippe auf eine andere Kategorie, um sie auszuwählen.</Text>

        <Text style={suggestionStyles.sectionLabel}>NOTIZEN (OPTIONAL)</Text>

        <NotesInput notes={notes} setNotes={setNotes} />

        <View style={{ marginTop: 30, gap: 14, marginBottom: 50 }}>
          <PrimaryButton title="Aufgabe speichern" onPress={handleSave} />
        </View>

      </ScrollView>
    </View>
  );
}
