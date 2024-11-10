import { useState } from "react";
import {
  TextInput,
  View,
  ViewProps,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  FlatList,
} from "react-native";

export default function TextField({
  placeholder,
  value,
  onChangeText,
  suggestions,
  style,
}: ViewProps & {
  placeholder: string;
  value: string;
  suggestions?: string[];
  onChangeText: (text: string) => void;
}) {
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <View
      style={[
        {
          backgroundColor: "white",
          padding: 12,
          borderRadius: 16,
          maxHeight: 200,
        },
        style,
      ]}
      focusable={true}
    >
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={(e) => {
          onChangeText(e);
          setMenuVisible(true);
        }}
        onFocus={() => setMenuVisible(true)}
        // onBlur={() => setMenuVisible(false)}
      />
      {menuVisible && suggestions && suggestions.length > 0 && (
        <FlatList
          data={suggestions}
          renderItem={({ item }) => (
            <TouchableOpacity
              key={item + Math.random()}
              style={{
                padding: 12,
                borderBottomWidth: 0.2,
                borderBottomColor: "gray",
              }}
              onPress={() => {
                onChangeText(item);
                setMenuVisible(false);
              }}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
        ></FlatList>
      )}
    </View>
  );
}
