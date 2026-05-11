import { categoryColors } from "../styles/colors";

export const categoryData = [
  {
    id: "uni",
    title: "Uni",
    completed: 5,
    total: 7,
    color: categoryColors.uni.border,
    icon: "school-outline",
  },
  {
    id: "arbeit",
    title: "Arbeit",
    completed: 4,
    total: 4,
    color: categoryColors.arbeit.border,
    icon: "briefcase-outline",
  },
  {
    id: "haushalt",
    title: "Haushalt",
    completed: 2,
    total: 5,
    color: categoryColors.haushalt.border,
    icon: "home-outline",
  },
  {
    id: "freizeit",
    title: "Freizeit",
    completed: 2,
    total: 3,
    color: categoryColors.freizeit.border,
    icon: "heart-outline",
  },
  {
    id: "gesundheit",
    title: "Gesundheit",
    completed: 2,
    total: 3,
    color: categoryColors.gesundheit.border,
    icon: "fitness-outline",
  },
  {
    id: "organisatorisches",
    title: "Organisatorisches",
    completed: 1,
    total: 6,
    color: categoryColors.organisatorisches.border,
    icon: "folder-outline",
  },
];

export const nextTasks = [
  {
    id: "1",
    title: "Vorlesung nachbereiten",
    category: "Uni",
    due: "Heute",
    color: categoryColors.uni.border,
  },
  {
    id: "2",
    title: "Meeting vorbereiten",
    category: "Arbeit",
    due: "Morgen",
    color: categoryColors.arbeit.border,
  },
  {
    id: "3",
    title: "Wäsche machen",
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