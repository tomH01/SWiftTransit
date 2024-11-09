import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Text, ViewProps } from "react-native";

export default function LevelBadge({
  level,
  style,
}: ViewProps & { level: number }) {
  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
      }}
    >
      <View
        style={{
          borderColor: "gold",
          padding: 4,
          borderWidth: 4,
          borderRadius: 100,
          borderStyle: "dashed",
          shadowColor: "gold",
          shadowOpacity: 0.4,
          shadowOffset: { width: 0, height: 2 },
        }}
      >
        <MaterialCommunityIcons
          name="steering"
          size={72}
          color="gold"
          style={{
            shadowColor: "gold",
            shadowOpacity: 0.4,
            shadowRadius: 2,
            shadowOffset: { width: 0, height: 2 },
          }}
        />
      </View>
      <Text
        style={{
          color: "black",
          fontSize: 16,
          fontWeight: "bold",
        }}
      >
        Level 10
      </Text>
    </View>
  );
}
