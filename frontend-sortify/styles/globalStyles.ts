import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop:65,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
});