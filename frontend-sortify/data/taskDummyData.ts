import { colors } from "../styles/colors";

export const initialTasks = [
{
    id: "haushalt-1",
    title: "Wäsche machen",
    category: "Haushalt",
    completed: false,
    createdAt: "dummy",
  },
  {
    id: "uni-1",
    title: "Vorlesung nachbereiten",
    category: "Uni",
    completed: false,
    createdAt: "dummy",
  },
  {
    id: "arbeit-1",
    title: "Meeting vorbereiten",
    category: "Arbeit",
    completed: false,
    createdAt: "dummy",
  },
  {
    id: "uni-2",
    title: "KI Assignment fertigstellen",
    category: "Uni",
    completed: true,
    createdAt: "dummy",
  },
  {
    id: "uni-3",
    title: "Paper lesen",
    category: "Uni",
    completed: false,
    createdAt: "dummy",
  },
  {
    id: "uni-4",
    title: "Für Klausur lernen",
    category: "Uni",
    completed: false,
    createdAt: "dummy",
  },
  {
    id: "arbeit-2",
    title: "E-Mail beantworten",
    category: "Arbeit",
    completed: false,
    createdAt: "dummy",
  },
  {
    id: "arbeit-3",
    title: "Präsentation vorbereiten",
    category: "Arbeit",
    completed: false,
    createdAt: "dummy",
  },

  {
    id: "haushalt-2",
    title: "Einkaufen gehen",
    category: "Haushalt",
    completed: false,
    createdAt: "dummy",
  },
  {
    id: "haushalt-3",
    title: "Zimmer aufräumen",
    category: "Haushalt",
    completed: false,
    createdAt: "dummy",
  },
  {
    id: "freizeit-1",
    title: "Freundin anrufen",
    category: "Freizeit/Privat",
    completed: false,
    createdAt: "dummy",
  },
  {
    id: "freizeit-2",
    title: "Geburtstagsgeschenk kaufen",
    category: "Freizeit/Privat",
    completed: false,
    createdAt: "dummy",
  },
  {
    id: "gesundheit-1",
    title: "Arzttermin vereinbaren",
    category: "Gesundheit",
    completed: true,
    createdAt: "dummy",
  },
  {
    id: "gesundheit-2",
    title: "Spazieren gehen",
    category: "Gesundheit",
    completed: false,
    createdAt: "dummy",
  },
  {
    id: "orga-1",
    title: "Unterlagen sortieren",
    category: "Organisatorisches",
    completed: false,
    createdAt: "dummy",
  },
  {
    id: "orga-2",
    title: "Rechnung bezahlen",
    category: "Organisatorisches",
    completed: false,
    createdAt: "dummy",
  },
  {
    id: "orga-3",
    title: "Termin planen",
    category: "Organisatorisches",
    completed: false,
    createdAt: "dummy",
  },
];

export function getCategoryColor(category: string) {
  switch (category) {
    case "Uni":
      return colors.categories.uni;
    case "Arbeit":
      return colors.categories.arbeit;
    case "Haushalt":
      return colors.categories.haushalt;
    case "Freizeit":
      return colors.categories.freizeit;
    case "Gesundheit":
      return colors.categories.gesundheit;
    case "Organisatorisches":
      return colors.categories.organisatorisches;
    default:
      return colors.purple;
  }
}