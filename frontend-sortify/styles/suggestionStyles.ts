import { StyleSheet } from "react-native";
import { colors } from "./colors";
import { layout } from "./layout";

export const suggestionStyles = StyleSheet.create({
  scrollContent: {
    paddingBottom: layout.pageGap,
  },
  introRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  introImage: {
    width: 122,
    height: 122,
    resizeMode: "contain",
  },
  introCopy: {
    flex: 1,
  },
  introTitle: {
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 24,
    color: colors.text,
  },
  introSubtitle: {
    color: colors.placeholder,
    marginTop: 8,
    fontSize: 12,
    lineHeight: 18,
  },
  sectionLabel: {
    marginTop: layout.sectionLabelTop,
    marginBottom: layout.sectionLabelBottom,
    color: colors.placeholder,
    fontWeight: "700",
    fontSize: layout.smallTextSize - 1,
    letterSpacing: 0.7,
  },
  chipsScrollContent: {
    paddingRight: 6,
    alignItems: "center",
  },
  chipsList: {
    height: 62,
  },
  chip: {
    width: layout.chipWidth,
    backgroundColor: colors.white,
    borderRadius: layout.chipRadius,
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: colors.lightGray,
    marginRight: 12,
  },
  chipActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  chipInner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  chipLabelRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  matchCard: {
    backgroundColor: "#FFF8FB",
    borderRadius: layout.cardRadius,
    paddingVertical: 14,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 14,
  },
  matchLabel: {
    color: colors.primary,
    fontWeight: "600",
    fontSize: 13,
  },
  matchValue: {
    color: colors.purple,
    fontWeight: "600",
    fontSize: 13,
  },
  hintText: {
    color: colors.placeholder,
    marginTop: 10,
    lineHeight: 20,
    fontSize: layout.smallTextSize,
  },
  notesCard: {
    backgroundColor: colors.white,
    borderRadius: layout.notesRadius,
    borderWidth: 1,
    borderColor: colors.lightGray,
    padding: 16,
    minHeight: 168,
  },
  notesInput: {
    flex: 1,
    fontSize: 15,
    color: colors.text,
    textAlignVertical: "top",
    paddingTop: 0,
  },
  notesCounter: {
    textAlign: "right",
    color: colors.placeholder,
    marginTop: 12,
    fontSize: layout.smallTextSize,
  },
});