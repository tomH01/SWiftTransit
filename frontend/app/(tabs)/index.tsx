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

export default function HomeScreen() {
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
          user={{
            name: "John",
            surname: "Doe",
            email: "john@doe.com",
            points: 100,
            id: "1",
          }}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">SWiftTransit</ThemedText>
      </ThemedView>
      <ThemedView style={styles.titleContainer}>
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
          color="orange"
          onPress={() => {
            console.log("TüBus");
          }}
          icon={<MaterialCommunityIcons name="bus" size={56} color="black" />}
        ></BigIconButton>
        <BigIconButton
          title="Coono"
          color="blue"
          onPress={() => {
            console.log("Coono");
          }}
          icon={<MaterialCommunityIcons name="car" size={56} color="black" />}
        ></BigIconButton>
        <BigIconButton
          title="Parking"
          color="red"
          onPress={() => {
            console.log("Parking");
          }}
          icon={
            <MaterialCommunityIcons name="parking" size={56} color="black" />
          }
        ></BigIconButton>
        <BigIconButton
          title="Plan Your Journey"
          color=""
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
    flexDirection: "row",
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
