import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { router, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { Button, Text, TouchableHighlight } from "react-native";
import { useColorScheme } from "@/hooks/useColorScheme";
import Ionicons from '@expo/vector-icons/Ionicons';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
        <Stack.Screen
          name="routing/index"
          options={{
            headerTitle: "Route Plan",
            headerStyle: { backgroundColor: "#008d58" },
            headerTitleStyle: { color: "white" },
            headerBackTitleVisible: false,
            headerLeft: (props) => {
              return (
                <TouchableHighlight
                  onPress={() => {
                    router.dismiss();
                  }}
                  underlayColor={"transparent"}
                >
                  <Ionicons name="arrow-back" style={{marginRight:10}} size={24} color="white" />
                </TouchableHighlight>
              );
            },
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
