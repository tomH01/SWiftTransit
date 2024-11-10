import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import {
  StyleSheet,
  TextInput,
  ViewProps,
  TouchableHighlight,
  Pressable,
  Text,
  View,
  ScrollView,
} from "react-native";
import ParallaxScrollView from "../ParallaxScrollView";

export default function OptionRoute({
  startTime,
  endTime,
  difference,
  busNumbers,
  delay,
}: ViewProps & {
  busNumbers: string[];
  startTime: string;
  endTime: string;
  difference: string;
  delay: string;
}) {
  return (
    <Pressable
      style={[
        {
          flexDirection: "column",
          padding: 10,
          gap: 8,
          alignItems: "center",
          marginVertical: 5,
          marginHorizontal: 10,
          backgroundColor: "#efefef",
          borderRadius: 8,
          // shadowOpacity: 0.5,
          shadowRadius: 8,
          shadowOffset: { width: 0, height: 2 },
        },
      ]}
    >
      <View
        style={[
          {
            flexDirection: "row",
          },
        ]}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flexDirection: "column",
            }}
          >
            <Text
              style={[
                style.text,
                {
                  // color: "white",
                  fontSize: 16,
                  fontWeight: "bold",
                  padding: 4,
                },
              ]}
            >
              {startTime} - {endTime}
            </Text>
            <Text
              style={{
                alignSelf: "flex-start",
                color: parseInt(delay) > 5 ? "red" : "green",
                marginLeft: 28,
                fontWeight: "bold",
              }}
            >
              {delay}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            flex: 1,
          }}
        >
          <Text style={[style.text, {}]}>{difference} min</Text>
        </View>
      </View>

      <View
        style={[
          {
            flexDirection: "row",
          },
        ]}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            flex: 2,
            backgroundColor: getBusColor(busNumbers[0]),
            alignItems: "center",
            borderRadius: 10,
            padding: 4,
          }}
        >
          <FontAwesome name="bus" size={24} color="white" />
          <Text style={style.text}>{busNumbers[0]}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <FontAwesome5 name="walking" size={24} color="black" />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            flex: 2,
            backgroundColor: "blue",
            borderRadius: 10,
            padding: 4,
          }}
        >
          <FontAwesome name="bus" size={24} color="black" />
          <Text style={style.text}>{busNumbers[1]}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    margin: 10,
    fontSize: 16,
    backgroundColor: "red",
    flexDirection: "column",
    alignItems: "center",
    height: 30,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 15,
  },
});

const busColors = new Map<String, String>([
  ["8", "red"],
  ["10", "blue"],
]);

const getBusColor = (number: String) => {
  return busColors.get(number)?.toString() || "blue"; // If no color is found, use blue as a default
};
