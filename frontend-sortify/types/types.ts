import type { CategoryKey } from "../styles/colors";

// Navigation Parameter Types
export type RootStackParamList = {
  "(tabs)": undefined;
  suggestion: {
    task: string;
    suggestedCategory: CategoryKey;
  };
};

// Helper type for the Suggestion screen's route params
export type SuggestionScreenParams = RootStackParamList["suggestion"];