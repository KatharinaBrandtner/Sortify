import { colors } from "../styles/colors";

export const categoryData = [
  {
    id: "uni",
    title: "Uni",
    completed: 5,
    total: 7,
    color: colors.categories.uni,
    icon: "school-outline",
  },
  {
    id: "arbeit",
    title: "Arbeit",
    completed: 4,
    total: 4,
    color: colors.categories.arbeit,
    icon: "briefcase-outline",
  },
  {
    id: "haushalt",
    title: "Haushalt",
    completed: 2,
    total: 5,
    color: colors.categories.haushalt,
    icon: "home-outline",
  },
  {
    id: "freizeit",
    title: "Freizeit",
    completed: 2,
    total: 3,
    color: colors.categories.freizeit,
    icon: "heart-outline",
  },
  {
    id: "gesundheit",
    title: "Gesundheit",
    completed: 2,
    total: 3,
    color: colors.categories.gesundheit,
    icon: "fitness-outline",
  },
  {
    id: "organisatorisches",
    title: "Organisatorisches",
    completed: 1,
    total: 6,
    color: colors.categories.organisatorisches,
    icon: "folder-outline",
  },
];

export const nextTasks = [
  {
    id: "1",
    title: "Vorlesung nachbereiten",
    category: "Uni",
    due: "Heute",
    color: colors.categories.uni,
  },
  {
    id: "2",
    title: "Meeting vorbereiten",
    category: "Arbeit",
    due: "Morgen",
    color: colors.categories.arbeit,
  },
  {
    id: "3",
    title: "Wäsche machen",
    category: "Haushalt",
    due: "Heute",
    color: colors.categories.haushalt,
  },
  {
    id: "4",
    title: "Arzttermin vereinbaren",
    category: "Gesundheit",
    due: "Diese Woche",
    color: colors.categories.gesundheit,
  },
];