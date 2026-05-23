import { categoryColors } from "../styles/colors";

export const categoryData = [
  {
    id: "uni",
    title: "Uni",
    completed: 2,
    total: 4,
    color: categoryColors.uni.border,
    icon: "school-outline",
  },
  {
    id: "arbeit",
    title: "Arbeit",
    completed: 1,
    total: 3,
    color: categoryColors.arbeit.border,
    icon: "briefcase-outline",
  },
  {
    id: "haushalt",
    title: "Haushalt",
    completed: 1,
    total: 3,
    color: categoryColors.haushalt.border,
    icon: "home-outline",
  },
  {
    id: "freizeit",
    title: "Freizeit",
    completed: 0,
    total: 2,
    color: categoryColors.freizeit.border,
    icon: "heart-outline",
  },
  {
    id: "gesundheit",
    title: "Gesundheit",
    completed: 1,
    total: 2,
    color: categoryColors.gesundheit.border,
    icon: "fitness-outline",
  },
  {
    id: "organisatorisches",
    title: "Organisatorisches",
    completed: 0,
    total: 3,
    color: categoryColors.organisatorisches.border,
    icon: "folder-outline",
  },
];

export const nextTasks = [
  {
    id: "1",
    title: "Paper lesen",
    category: "Uni",
    due: "Heute",
    color: categoryColors.uni.border,
  },
  {
    id: "2",
    title: "E-Mail beantworten",
    category: "Arbeit",
    due: "Morgen",
    color: categoryColors.arbeit.border,
  },
  {
    id: "3",
    title: "Einkaufen gehen",
    category: "Haushalt",
    due: "Heute",
    color: categoryColors.haushalt.border,
  },
  {
    id: "4",
    title: "Arzttermin vereinbaren",
    category: "Gesundheit",
    due: "Diese Woche",
    color: categoryColors.gesundheit.border,
  },
];