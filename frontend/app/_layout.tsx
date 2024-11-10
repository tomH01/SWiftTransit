import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Link, router, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import { Button, Text, View, TouchableHighlight } from "react-native";
import { useColorScheme } from "@/hooks/useColorScheme";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import UserContext from "@/hooks/useUserData";
import Ionicons from "@expo/vector-icons/Ionicons";
import { BackButton } from "@/components/BackButton";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [user, setUser] = useState({
    name: "Boris",
    surname: "P.",
    email: "some@mail.com",
    points: 100,
    id: "1",
  });
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
      <UserContext.Provider value={{ user, setUser }}>
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
                    <BackButton/>
                  </TouchableHighlight>
                );
              },
            }}
          />
          <Stack.Screen
            name="bus/index"
            options={{
              headerTitle: "TüBus Feedback",
              headerStyle: { backgroundColor: "#c00d0d" },
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
                    <BackButton/>
                  </TouchableHighlight>
                );
              },
              headerRight: (props) => {
                return (
                  <Link href="/(tabs)/">
                    <View
                      style={{
                        flexDirection: "row",
                        backgroundColor: "#ffffff",
                        padding: 1,
                        paddingLeft: 8,
                        borderRadius: 100,
                        alignItems: "center",
                      }}
                    >
                      <FontAwesome6 name="coins" size={16} color="black" />
                      <Text style={{ color: "black", padding: 8 }}>
                        {user.points}
                      </Text>
                    </View>
                  </Link>
                );
              },
            }}
          />
        </Stack>
      </UserContext.Provider>
    </ThemeProvider>
  );
}
