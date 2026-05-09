import { colors } from "./colors";

export const tabBar = {
  tabBar: {
    height: 86,
    paddingTop: 10,
    paddingBottom:  110,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    borderTopWidth: 0,
    position: "absolute" as const,

    shadowColor: colors.dark,
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 10,

    elevation: 10,
  },

  label: {
    fontSize: 11,
    fontWeight: "600" as const,
    marginTop: 4,
  },
};