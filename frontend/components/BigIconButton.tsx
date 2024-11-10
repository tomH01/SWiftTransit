import { PropsWithChildren, ReactElement, useState } from "react";
import {
  Text,
  Pressable,
  StyleSheet,
  View,
  Image,
  Button,
  TouchableHighlight,
} from "react-native";

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
    // green red blue yellow green
    <TouchableHighlight
      style={{
        backgroundColor: "white",
        shadowOpacity: 0.2,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },
        elevation: 20,
        padding: 16,
        borderRadius: 16,
        flexGrow: 1,
      }}
      onPress={onPress}
      underlayColor={"#f0f0f0"}
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
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({});
