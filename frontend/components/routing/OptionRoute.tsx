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
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

export default function OptionRoute({
  startTime,
  endTime,
  difference,
  busNumbers,
  delay,
  fullness,
  bike,
  actual_arrival,
}: ViewProps & {
  busNumbers: string[];
  startTime: string;
  endTime: string;
  difference: string;
  delay: string;
  fullness: number;
  bike: boolean;
  actual_arrival: string;
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
                  fontSize: 16,
                  fontWeight: "bold",
                  padding: 4,
                },
              ]}
            >
              {startTime} - {endTime}
            </Text>
            <View style={{ flexDirection: "row"}}>
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
              <Text
              style={{
                marginLeft: 28,
                fontWeight: "bold",
                color: "gray"
              }}
              >
                Est: {actual_arrival}
              </Text>
            </View>
          </View>
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              flex: 1,
            }}
          >
            <Text style={[style.text, {}]}>{difference} min</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              flex: 1,
              marginRight: 20,
              gap: 8,
            }}
          >
            {fullness == 0 ? (
              <Ionicons name="person-sharp" size={20} color="#34A853" />
            ) : fullness == 1 ? (
              <Ionicons name="people" size={20} color="#FBBC05" />
            ) : (
              <MaterialCommunityIcons
                name="account-group"
                size={20}
                color="#EA4335"
              />
            )}

            <MaterialCommunityIcons
              name="bicycle"
              size={20}
              color={bike ? "#34A853" : "#EA4335"}
            />
          </View>
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
          <Text style={[style.text, { color: "white" }]}>{busNumbers[0]}</Text>
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
            backgroundColor: getBusColor(busNumbers[1]),
            borderRadius: 10,
            padding: 4,
          }}
        >
          <FontAwesome name="bus" size={24} color="white" />
          <Text style={[style.text, { color: "white" }]}>{busNumbers[1]}</Text>
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
  ["8", "#4285F4"],
  ["10", "#34A853"],
]);

const getBusColor = (number: String) => {
  return busColors.get(number)?.toString(); // If no color is found, use blue as a default
};
