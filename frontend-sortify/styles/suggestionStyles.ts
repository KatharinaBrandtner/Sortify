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
    marginBottom: 0,
    color: colors.purple,
    fontWeight: "700",
    fontSize: layout.smallTextSize + 1,
    letterSpacing: 0.7,
  },
  chipsScrollContent: {
    marginTop: 12,
    paddingRight: 6,
    alignItems: "center",
  },
  chipsList: {
    height: 68,
  },
  chip: {
    backgroundColor: colors.white,
    borderRadius: layout.chipRadius,
    paddingVertical: 9,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: colors.lightGray,
    marginRight: 12,
    flexShrink: 0,
    alignSelf: "flex-start",
  },
  chipInner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  chipLabelRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    flexShrink: 1,
  },
  matchCard: {
    backgroundColor: "#FFF8FB",
    borderRadius: layout.cardRadius,
    paddingVertical: 14,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 0,
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