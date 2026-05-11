export type Task = {
  text: string;
};

// Navigation Parameter Types
export type RootStackParamList = {
  "(tabs)": undefined;
  suggestion: {
    task: string;
    suggestedCategory: string;
  };
};