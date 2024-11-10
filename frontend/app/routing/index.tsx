import TextField from "@/components/routing/TextField";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Switch,
  TouchableHighlight,
  Button,
  ScrollView,
} from "react-native";
import OptionRoute from "@/components/routing/OptionRoute";

export default function RoutePlan() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [bike, setBike] = useState(false);

  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
        height: "100%",
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
              onChangeText={setFrom}
              style={{
                flexGrow: 1,
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
              onChangeText={setTo}
              style={{
                flexGrow: 1,
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
                onPress={() => {}}
                underlayColor={"transparent"}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    borderRadius: 20,
                    paddingHorizontal: 32,
                    paddingVertical: 8,
                    backgroundColor: "#8BB88B",
                    justifyContent: "center",
                  }}
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
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </View>
        {/* Results */}
        <View></View>
      </View>
      <ScrollView style={{}}>
        <OptionRoute
          startTime="8:45"
          endTime="9:03"
          difference="18"
          busNumbers={["8", "10"]}
          delay="+3"
          bike={true}
          fullness={1}
          actual_arrival="9:06"
        />
        <OptionRoute
          startTime="8:45"
          endTime="9:03"
          difference="18"
          busNumbers={["8", "10"]}
          delay="+7"
          bike={false}
          fullness={1}
          actual_arrival="9:10"
        />
        <OptionRoute
          startTime="8:45"
          endTime="9:03"
          difference="18"
          busNumbers={["8", "10"]}
          delay="+7"
          bike={true}
          fullness={1}
          actual_arrival="9:10"
        />
        <OptionRoute
          startTime="8:45"
          endTime="9:03"
          difference="18"
          busNumbers={["8", "10"]}
          delay="+7"
          bike={true}
          fullness={1}
          actual_arrival="9:10"
        />
        <OptionRoute
          startTime="8:45"
          endTime="9:03"
          difference="18"
          busNumbers={["8", "10"]}
          delay="+7"
          bike={true}
          fullness={0}
          actual_arrival="9:10"
        />
        <OptionRoute
          startTime="8:45"
          endTime="9:03"
          difference="18"
          busNumbers={["8", "10"]}
          delay="+7"
          bike={true}
          fullness={1}
          actual_arrival="9:10"
        />
        <OptionRoute
          startTime="8:45"
          endTime="9:03"
          difference="18"
          busNumbers={["8", "10"]}
          delay="+7"
          bike={false}
          fullness={2}
          actual_arrival="9:10"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  points: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
