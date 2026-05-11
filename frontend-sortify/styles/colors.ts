export const colors = {
  primary: "#5B021D",
  purple: "#36175A",
  blue: "#7EC7CF",
  light: "#F7F2F4",
  dark: "#1A0F11",
  background: "#FBFBFD",
  text: "#1A0F11",
  lightGray: "#EDE9EF",
  lighterGray: "#f2eef4",
  lightPurple: "#EFE7FF",
  lightBlue: "#E6F8FB",
  lightPink: "#FFF0F7",
  placeholder: "#B5ADB7",
  white: "#FFFFFF",
};

export const categoryColors = {
  uni: {
    border: "#5B021D",
    light: "rgba(91, 2, 29, 0.14)",
  },
  arbeit: {
    border: "#7EC7CF",
    light: "rgba(126, 199, 207, 0.14)",
  },
  haushalt: {
    border: "#36175A",
    light: "rgba(54, 23, 90, 0.14)",
  },
  freizeit: {
    border: "#D45C8C",
    light: "rgba(212, 92, 140, 0.14)",
  },
  gesundheit: {
    border: "#2BAE66",
    light: "rgba(43, 174, 102, 0.14)",
  },
  organisatorisches: {
    border: "#F5A623",
    light: "rgba(245, 166, 35, 0.14)",
  },
} as const;

export type CategoryKey = keyof typeof categoryColors;