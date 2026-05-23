import { Stack } from "expo-router";
import { TaskProvider } from "../context/TaskContext";

export default function RootLayout() {
  return (
    <TaskProvider>
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="suggestion"
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
    </Stack>
    </TaskProvider>
  );
}