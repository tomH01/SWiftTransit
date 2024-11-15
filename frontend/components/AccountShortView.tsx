import Ionicons from "@expo/vector-icons/Ionicons";
import { PropsWithChildren, useState } from "react";
import { Text, Pressable, StyleSheet, View, Image } from "react-native";
import { User } from "@/types/user";
import { ThemedText } from "./ThemedText";

export function AccountShortView({
  user,
  onPress,
}: PropsWithChildren & { user: User; onPress?: () => void }) {
  return (
    <Pressable
      style={{
        flexDirection: "row",
        padding: 8,
        gap: 8,
        alignItems: "center",
        shadowColor: "black",
        shadowRadius: 16,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        borderRadius: 8,
        elevation: 10
      }}
      onPress={onPress}
    >
      <View style={styles.avatar}>
        {user.avatar ? (
          <Image
            src={user.avatar}
            style={{
              width: 32,
              height: 32,
              borderRadius: 100,
            }}
          ></Image>
        ) : (
          <Ionicons name="person-outline" size={32} />
        )}
      </View>
      <View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            color: "white",
          }}
        >
          {user.name} {user.surname}
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 16,
          }}
        >
          {user.points} Points
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 100,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 48,
    height: 48,
    color: "white",
  },
});
