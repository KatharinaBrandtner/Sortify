import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import { colors } from "../../styles/colors";
import { tabBar} from "../../styles/tabBar";

export default function TabsLayout() {
  return (
    <Tabs
    screenOptions={{
      headerShown: false,
      sceneStyle: {
        backgroundColor: colors.background,
      },
      tabBarActiveTintColor: colors.purple,
      tabBarInactiveTintColor: colors.placeholder,
      tabBarStyle: tabBar.tabBar,
      tabBarLabelStyle: tabBar.label,
    }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={30} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="add-task"
        options={{
          title: "Hinzufügen",
          tabBarIcon: ({ color }) => (
            <Ionicons name="add-circle-outline" size={30} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="category"
        options={{
          title: "Kategorien",
          tabBarIcon: ({ color }) => (
            <Ionicons name="grid-outline" size={30} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: "Profil",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" size={30} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}