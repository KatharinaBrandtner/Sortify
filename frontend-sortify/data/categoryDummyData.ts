import { colors } from "../styles/colors";

export const categoryOverviewData = [
  {
    id: "uni",
    title: "Uni",
    completed: 3,
    total: 7,
    color: colors.categories.uni,
    icon: "school-outline",
    tasks: [
      { id: "uni-1", title: "Vorlesung nachbereiten", completed: true },
      { id: "uni-2", title: "KI Assignment fertigstellen", completed: true },
      { id: "uni-3", title: "Paper lesen", completed: false },
      { id: "uni-4", title: "Für Klausur lernen", completed: false },
    ],
  },
  {
    id: "arbeit",
    title: "Arbeit",
    completed: 4,
    total: 6,
    color: colors.categories.arbeit,
    icon: "briefcase-outline",
    tasks: [
      { id: "arbeit-1", title: "Meeting vorbereiten", completed: true },
      { id: "arbeit-2", title: "E-Mail beantworten", completed: false },
      { id: "arbeit-3", title: "Präsentation vorbereiten", completed: false },
    ],
  },
  {
    id: "haushalt",
    title: "Haushalt",
    completed: 2,
    total: 5,
    color: colors.categories.haushalt,
    icon: "home-outline",
    tasks: [
      { id: "haushalt-1", title: "Wäsche machen", completed: true },
      { id: "haushalt-2", title: "Einkaufen gehen", completed: false },
      { id: "haushalt-3", title: "Zimmer aufräumen", completed: false },
    ],
  },
  {
    id: "freizeit",
    title: "Freizeit/Privat",
    completed: 1,
    total: 4,
    color: colors.categories.freizeit,
    icon: "heart-outline",
    tasks: [
      { id: "freizeit-1", title: "Freundin anrufen", completed: false },
      { id: "freizeit-2", title: "Geburtstagsgeschenk kaufen", completed: false },
    ],
  },
  {
    id: "gesundheit",
    title: "Gesundheit",
    completed: 2,
    total: 3,
    color: colors.categories.gesundheit,
    icon: "fitness-outline",
    tasks: [
      { id: "gesundheit-1", title: "Arzttermin vereinbaren", completed: true },
      { id: "gesundheit-2", title: "Spazieren gehen", completed: false },
    ],
  },
  {
    id: "organisatorisches",
    title: "Organisatorisches",
    completed: 1,
    total: 6,
    color: colors.categories.organisatorisches,
    icon: "folder-outline",
    tasks: [
      { id: "orga-1", title: "Unterlagen sortieren", completed: false },
      { id: "orga-2", title: "Rechnung bezahlen", completed: false },
      { id: "orga-3", title: "Termin planen", completed: false },
    ],
  },
];