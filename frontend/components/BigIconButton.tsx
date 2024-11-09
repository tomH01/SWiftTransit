import { PropsWithChildren, ReactElement, useState } from "react";
import { Text, Pressable, StyleSheet, View, Image, Button } from "react-native";

export function BigIconButton({
  title,
  icon,
  onPress,
  color,
}: PropsWithChildren & {
  title: string;
  icon: ReactElement;
  onPress: () => void;
  color?: string;
}) {
  return (
    <Pressable
      style={{
        backgroundColor: "white",
        shadowColor: "black",
        shadowOpacity: 0.2,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },
        padding: 16,
        borderRadius: 16,
        flexGrow: 1,
      }}
      onPress={onPress}
    >
      <View
        style={[
          color
            ? {
                shadowColor: color,
                shadowOpacity: 1,
                shadowRadius: 24,
                shadowOffset: { width: 0, height: 2 },
              }
            : {},
          { flexDirection: "column", alignItems: "center", gap: 8 },
        ]}
      >
        <View>{icon}</View>
        <Text
          style={{
            fontSize: 20,
          }}
        >
          {title}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({});
