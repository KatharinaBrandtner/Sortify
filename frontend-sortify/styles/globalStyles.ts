import { StyleSheet } from "react-native";
import { colors } from "./colors";
import { layout } from "./layout";

export const globalStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: layout.tabScreenPaddingTop,
    paddingLeft: layout.screenPaddingX,
    paddingRight: layout.screenPaddingX,
    paddingBottom: layout.screenPaddingBottom,
  },
});
