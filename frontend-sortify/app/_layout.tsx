import { useEffect, useState } from "react";
import { Stack } from "expo-router";
import { TaskProvider } from "../context/TaskContext";
import ExpoGoSplashFallback from "../components/Splash/ExpoGoSplashFallback";

const MIN_SPLASH_TIME_MS = 1200;

export default function RootLayout() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, MIN_SPLASH_TIME_MS);

    return () => clearTimeout(timer);
  }, []);

  if (!isReady) {
    return <ExpoGoSplashFallback />;
  }

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