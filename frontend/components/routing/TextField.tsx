import { TextInput, ViewProps } from "react-native";

export default function TextField({
  placeholder,
  value,
  onChangeText,
  style,
}: ViewProps & {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}) {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={(e) => onChangeText(e)}
      style={[
        {
          backgroundColor: "white",
          padding: 12,
          borderRadius: 16,
        },
        style,
      ]}
    />
  );
}
