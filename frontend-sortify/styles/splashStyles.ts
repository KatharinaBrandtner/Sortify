import { StyleSheet } from "react-native";

export const splashStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBFBFD",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  accentTopLeft: {
    position: "absolute",
    top: -90,
    left: -70,
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: "rgba(126, 199, 207, 0.18)",
  },
  accentBottomRight: {
    position: "absolute",
    right: -80,
    bottom: -90,
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: "rgba(54, 23, 90, 0.10)",
  },
  image: {
    width: 150,
    height: 150,
  },
});