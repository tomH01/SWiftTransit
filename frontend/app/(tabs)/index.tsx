import {
  Image,
  StyleSheet,
  Platform,
  Pressable,
  View,
  Text,
} from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { AccountShortView } from "@/components/AccountShortView";
import { BigIconButton } from "@/components/BigIconButton";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { router } from "expo-router";
import UserContext from "@/hooks/useUserData";
import { useContext } from "react";

export default function HomeScreen() {
  const { user, setUser } = useContext(UserContext);
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/tubus_bg.jpg")}
          style={styles.reactLogo}
        />
      }
      headerContent={
        <AccountShortView
          user={user}
          onPress={() => {
            if (user.name == "Boris") {
              setUser({
                ...user,
                name: "Christiane",
                surname: "N.-V.",
                points: 720,
              });
            } else {
              setUser({ ...user, name: "Boris", surname: "P.", points: 100 });
            }
          }}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText 
        style={{
          fontWeight:"bold",
        }}
        type="title">SWiftTransit</ThemedText>
      </ThemedView>
      <ThemedView style={[styles.titleContainer, {alignSelf: "flex-start", marginLeft: 4}]}>
        <ThemedText type="subtitle">Plan Your Journey</ThemedText>
      </ThemedView>

      <ThemedView
        style={[
          styles.stepContainer,
          { flexDirection: "row", gap: 16, flexWrap: "wrap" },
        ]}
      >
        <BigIconButton
          title="Bike"
          onPress={() => {
            console.log("Bike");
          }}
          color="green"
          icon={<MaterialCommunityIcons name="bike" size={56} color="black" />}
        ></BigIconButton>
        <BigIconButton
          title="TüBus"
          color="red"
          onPress={() => {
            router.push("/bus");
          }}
          icon={<MaterialCommunityIcons name="bus" size={56} color="black" />}
        ></BigIconButton>
        <BigIconButton
          title="Coono"
          color="blue"
          onPress={() => {
            setUser({ ...user, points: user.points + 1 });
          }}
          icon={<MaterialCommunityIcons name="car" size={56} color="black" />}
        ></BigIconButton>
        <BigIconButton
          title="Parking"
          color="yellow"
          onPress={() => {
            console.log("Parking");
          }}
          icon={
            <MaterialCommunityIcons name="parking" size={56} color="black" />
          }
        ></BigIconButton>
        <BigIconButton
          title="Routes"
          color="green"
          onPress={() => {
            router.push("/routing");
          }}
          icon={<MaterialCommunityIcons name="map" size={56} color="black" />}
        ></BigIconButton>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    bottom: 0,
    left: 0,
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});
