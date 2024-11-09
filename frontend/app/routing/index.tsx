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
} from "react-native";

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
              placeholder="from..."
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
              placeholder="to..."
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
              justifyContent: "flex-end",
              marginTop: 16,
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
                <Text
                  style={{
                    color: "white",
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                >
                  Filters
                </Text>
                <Ionicons name="options" size={24} color="white" />
              </View>
            </TouchableHighlight>
          </View>
        </View>
        {/* Results */}
        <View></View>
      </View>
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
