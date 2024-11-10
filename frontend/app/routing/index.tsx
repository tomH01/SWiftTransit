import TextField from "@/components/routing/TextField";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useContext, useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  ScrollView,
  FlatList,
} from "react-native";
import OptionRoute from "@/components/routing/OptionRoute";
import Route from "@/types/route";
import UserContext from "@/hooks/useUserData";

interface SuggestionResponse {
  id: number;
  name: string;
}

export default function RoutePlan() {
  const { user } = useContext(UserContext);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [data, setData] = useState<Route[][]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  function fetchSuggestions(value: string) {
    fetch(
      "http://167.235.150.171:8000/api/station/prefix_search/?prefix=" + value
    )
      .then((res) => res.json())
      .then((data: SuggestionResponse[]) =>
        setSuggestions(data.map((d) => d.name))
      );
  }
  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
        height: "100%",
        zIndex: 10,
      }}
    >
      <View
        style={{
          backgroundColor: "#008d58",
          padding: 16,
        }}
      >
        {/* Route Search */}
        <View
          style={{
            gap: 16,
          }}
        >
          {/* A to B */}
          <View style={style.points}>
            <MaterialCommunityIcons
              name="alpha-a-circle-outline"
              size={32}
              color="white"
            />
            <TextField
              placeholder="From..."
              value={from}
              suggestions={suggestions}
              onChangeText={(text) => {
                setFrom(text);
                fetchSuggestions(text);
              }}
              style={{
                flexGrow: 1,
                zIndex: 10,
              }}
            ></TextField>
          </View>
          <View style={style.points}>
            <MaterialCommunityIcons
              name="alpha-b-circle-outline"
              size={32}
              color="white"
            />
            <TextField
              placeholder="To..."
              value={to}
              onChangeText={(text) => {
                setTo(text);
                fetchSuggestions(text);
              }}
              suggestions={suggestions}
              style={{
                flexGrow: 1,
                zIndex: 10,
              }}
            ></TextField>
          </View>
          {/* Filters */}
          <View
            style={{
              flexDirection: "row",
              // justifyContent: "flex-start",
              marginTop: 16,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                flex: 1,
              }}
            >
              <TouchableHighlight
                onPress={() => {}}
                underlayColor={"transparent"}
              >
                <View
                  style={{
                    flexDirection: "row",
                    gap: 8,
                    alignItems: "center",
                  }}
                >
                  <Ionicons name="options" size={28} color="white" />
                  <Text
                    style={{
                      color: "white",
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  >
                    Filters
                  </Text>
                </View>
              </TouchableHighlight>
            </View>
            {/* {SEARCH BUTTON} */}
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <TouchableHighlight
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  borderRadius: 20,
                  paddingHorizontal: 32,
                  paddingVertical: 8,
                  backgroundColor: "#8BB88B",
                  justifyContent: "center",
                }}
                onPress={() => {
                  let name = user?.name;
                  console.log(name);
                  fetch(
                    `http://167.235.150.171:8000/api/routes-${name.toLowerCase()}/`
                  )
                    .then((res) => res.json())
                    .then((data) => setData(data));
                }}
                underlayColor={"transparent"}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                >
                  Search
                </Text>
                {/* <Ionicons name="search" size={28} color="#006400" /> */}
              </TouchableHighlight>
            </View>
          </View>
        </View>
        {/* Results */}
        <View></View>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => <OptionRoute data={item} />}
      ></FlatList>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  points: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    zIndex: 10,
  },
});
