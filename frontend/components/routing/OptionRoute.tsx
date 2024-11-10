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
import Route from "@/types/route";

export default function OptionRoute({
  data,
}: ViewProps & {
  data: Route[];
}) {
  return (
    <Pressable
      style={[
        {
          flexDirection: "column",
          padding: 16,
          gap: 16,
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
            justifyContent: "space-between",
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
              gap: 4,
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
              {data[0].departure} - {data[data.length - 1].arrival}
            </Text>
            {data[0].departure_delay != -1 ? (
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    alignSelf: "flex-start",
                    color: data[0].departure_delay > 5 ? "red" : "green",
                    marginLeft: 4,
                    fontWeight: "bold",
                  }}
                >
                  +{data[0].departure_delay}
                </Text>
                <Text
                  style={{
                    marginLeft: 36,
                    fontWeight: "bold",
                    color: "gray",
                  }}
                >
                  Est: {data[data.length - 1].arrival_actual}
                </Text>
              </View>
            ) : null}
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
            <Text style={[style.text, {}]}>
              {Math.floor(Math.random() * 30) + 10} min
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              flex: 1,

              gap: 8,
            }}
          >
            {data[0].occupancy == 0 ? (
              <Ionicons name="person-sharp" size={20} color="#34A853" />
            ) : data[0].occupancy == 1 ? (
              <Ionicons name="people" size={20} color="#FBBC05" />
            ) : data[0].occupancy == 2 ? (
              <MaterialCommunityIcons
                name="account-group"
                size={20}
                color="#EA4335"
              />
            ) : (
              <Ionicons name="people" size={20} color="gray" />
            )}

            <MaterialCommunityIcons
              name="bicycle"
              size={20}
              color={
                data[0].bicycle == 1
                  ? "#34A853"
                  : data[0].bicycle == 0
                  ? "#EA4335"
                  : "gray"
              }
            />
          </View>
        </View>
      </View>

      <View
        style={[
          {
            flexDirection: "row",
            gap: 8,
          },
        ]}
      >
        {data.map((route, index) => (
          <View
            key={index}
            style={{
              flexDirection: "row",
              justifyContent: "center",
              flex: 2,
              backgroundColor: getBusColor(route.name.toString()),
              alignItems: "center",
              borderRadius: 10,
              padding: 4,
              gap: 12,
            }}
          >
            <FontAwesome name="bus" size={20} color="white" />
            <Text style={[style.text, { color: "white" }]}>{route.name}</Text>
          </View>
        ))}

        {/* <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <FontAwesome5 name="walking" size={24} color="black" />
        </View> */}
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
  },
});

const busColors = new Map<String, String>([
  ["8", "#4285F4"],
  ["10", "#34A853"],
]);

const getBusColor = (number: String) => {
  return busColors.get(number)?.toString(); // If no color is found, use blue as a default
};
