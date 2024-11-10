import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableHighlight } from "react-native";

export function BackButton() {
  return (
    <Ionicons
      name="arrow-back"
      style={{ marginRight: 10 }}
      size={24}
      color="white"
    />
  );
}
