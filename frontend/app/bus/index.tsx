import TextField from "@/components/routing/TextField";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import Ionicons from "@expo/vector-icons/Ionicons";
import { useContext, useEffect, useMemo, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Switch,
  TouchableHighlight,
  Button,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import LevelBadge from "@/components/LevelBadge";
import { ProgressBar } from "@/components/ProgressBar";
import UserContext from "@/hooks/useUserData";

interface BusData {
  busNumber: string;
  station: string;
}

export default function BusFeedback() {
  const [busData, setBusData] = useState<BusData | undefined>(undefined);
  const { user, setUser } = useContext(UserContext);
  const challengeProgresses = useMemo(() => {
    return {
      daily: Math.random(),
      weekly: Math.random(),
      seasonal: Math.random(),
    };
  }, []);
  useEffect(() => {
    const busses = ["2", "3", "4", "5"];
    const stations = [
      "HölderlinStraße",
      "Hauptbahnhof",
      "Fichtenweg",
      "Wilhelmstraße",
      "Neckarbrücke",
      "Nonnenhaus",
    ];
    setTimeout(() => {
      setBusData({
        busNumber: busses[Math.floor(Math.random() * busses.length)],
        station: stations[Math.floor(Math.random() * stations.length)],
      });
    }, 1000);
  }, []);
  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
        height: "100%",
      }}
    >
      <View
        style={{
          padding: 16,
          gap: 24,
        }}
      >
        <ThemedText type="title">
          Hello, {user.name} {user.surname}
        </ThemedText>
        {/* Challenges */}
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            gap: 16,
          }}
        >
          <View
            style={{
              flexGrow: 1,
              borderColor: "black",
              gap: 8,
              justifyContent: "center",
              //   padding: 8,
              //   shadowColor: "black",
              //   shadowOpacity: 0.4,
              //   shadowRadius: 4,
              //   shadowOffset: { width: 0, height: 2 },
              //   backgroundColor: "white",
              //   borderRadius: 16,
            }}
          >
            <View
              style={{
                flexDirection: "column",
                width: "100%",
              }}
            >
              <Text
                style={{
                  color: "black",
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                Daily Challenges
              </Text>
              <ProgressBar
                progress={Math.max(0.2, challengeProgresses.daily)}
                backgroundColor="white"
                color="#c00d0d"
                height={12}
                style={{ width: "50%" }}
              />
            </View>
            <View
              style={{
                flexDirection: "column",
                width: "100%",
              }}
            >
              <Text
                style={{
                  color: "black",
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                Weekly Challenges
              </Text>
              <ProgressBar
                progress={Math.max(0.2, challengeProgresses.weekly)}
                backgroundColor="white"
                color="#c00d0d"
                height={12}
                style={{ width: "50%" }}
              />
            </View>
            <View
              style={{
                flexDirection: "column",
                width: "100%",
              }}
            >
              <Text
                style={{
                  color: "black",
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                Seasonal Challenges
              </Text>
              <ProgressBar
                progress={Math.max(0.2, challengeProgresses.seasonal)}
                backgroundColor="white"
                color="#c00d0d"
                height={12}
                style={{ width: "50%" }}
              />
            </View>
          </View>
          <LevelBadge
            style={{
              alignSelf: "flex-end",
            }}
            level={10}
          />
        </View>
        {/* Bus Detection */}
        <View
          style={{
            width: "100%",
            backgroundColor: "#c00d0d",
            padding: 8,
            borderRadius: 8,
            flexDirection: "row",
            gap: 8,
          }}
        >
          {!busData ? <ActivityIndicator size={16} color={"white"} /> : null}
          <Text
            style={{
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            {busData
              ? `Bus ${busData.busNumber} at ${busData.station}`
              : "Detecting Bus..."}
          </Text>
        </View>
        <ScrollView style={{}}>
          {/* empty array with 100 elements mapping */}
          {Array.from({ length: 100 }).map((_, index) => (
            <View
              style={{
                gap: 16,
                shadowColor: "black",
                backgroundColor: "#f0f0f0",
                borderRadius: 16,
                padding: 16,
                marginBottom: 16,
              }}
            >
              {/* Question */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                  }}
                >
                  How occupied is the bus?
                </Text>
                <View
                  style={{
                    backgroundColor: "gold",
                    padding: 8,
                    borderRadius: 100,
                    width: 32,
                    height: 32,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text>{Math.floor(Math.random() * 20) + 1}</Text>
                </View>
              </View>
              <Text>Select Below:</Text>
              {/* Multiple Choice */}
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    gap: 8,
                  }}
                >
                  {["Empty", "Half", "Full"].map((choice) => (
                    <TouchableHighlight
                      style={{
                        backgroundColor: "white",
                        padding: 8,
                        borderRadius: 8,
                        flexGrow: 1,
                        alignItems: "center",
                      }}
                      onPress={() => {
                        console.log(choice);
                      }}
                      underlayColor={"#f0f0f0"}
                    >
                      <Text>{choice}</Text>
                    </TouchableHighlight>
                  ))}
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({});
