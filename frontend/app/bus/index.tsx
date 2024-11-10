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
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  LayoutAnimation,
} from "react-native";
import { ThemedText } from "@/components/ThemedText";
import LevelBadge from "@/components/LevelBadge";
import { ProgressBar } from "@/components/ProgressBar";
import UserContext from "@/hooks/useUserData";
import React from "react";

interface BusData {
  busNumber: string;
  station: string;
}

interface Questions {
  id: string;
  question: string;
  answers: string[];
  points: number;
  type?: "multiple" | "single";
}

const sampleQuestions: Questions[] = [
  {
    id: "1",
    question: "How full is your bus?",
    answers: ["Empty", "Medium", "Full"],
    points: 12,
  },
  {
    id: "2",
    question: "How many bikes are on board?",
    answers: ["0", "1", "2"],
    points: 14,
  },
  {
    id: "3",
    question: "Is there a wheelchair/stroller on board?",
    answers: ["Yes", "No"],
    points: 10,
  },
  {
    id: "4",
    question: "Do you expect delays?",
    answers: ["Yes", "No"],
    points: 10,
  },
];

export default function BusFeedback() {
  const [busData, setBusData] = useState<BusData | undefined>(undefined);
  const { user, setUser } = useContext(UserContext);
  const [questions, setQuestions] = useState<Questions[]>(sampleQuestions);

  const challengeProgresses = useMemo(() => {
    return {
      daily: Math.random(),
      weekly: Math.random(),
      seasonal: Math.random(),
    };
  }, []);
  useEffect(() => {
    const busses = [
      // "2", "3", "4", "5"
      "8",
    ];
    const stations = [
      // "HölderlinStraße",
      // "Hauptbahnhof",
      // "Fichtenweg",
      // "Wilhelmstraße",
      "Neckarbrücke",
      // "Nonnenhaus",
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
      }}
    >
      <View
        style={{
          padding: 16,
          gap: 24,
          height: "100%",
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
                color="#ea4335"
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
                color="#ea4335"
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
                color="#ea4335"
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
            backgroundColor: "#ea4335",
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
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <ThemedText type="subtitle">Feedbacks</ThemedText>

          <TouchableOpacity
            style={{
              backgroundColor: "#ea4335",
              borderRadius: 8,
            }}
          >
            <Text
              style={{
                color: "white",
                padding: 8,
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              Report Harrasmenet
            </Text>
          </TouchableOpacity>
        </View>
        {questions.length > 0 ? (
          <FlatList
            data={questions}
            renderItem={({ item }) => {
              return (
                <Question
                  key={item.question}
                  question={item}
                  onChoice={(choice) => {
                    let newQuestions = questions.filter(
                      (q) => q.id !== item.id
                    );
                    setQuestions(newQuestions);
                    LayoutAnimation.configureNext(layoutAnimConfig);
                    setUser({ ...user, points: user.points + item.points });
                  }}
                />
              );
            }}
            keyExtractor={(item) => item.id}
            scrollEnabled={true}
          />
        ) : (
          <Text>No more questions!</Text>
        )}
      </View>
    </SafeAreaView>
  );
}

function Question({
  question,
  onChoice,
}: {
  question: Questions;
  onChoice?: (choice: string) => void;
}) {
  const [text, setText] = useState("");
  return (
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
            // text wrap
            flexShrink: 1,
          }}
        >
          {question.question}
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
          <Text>{question.points}</Text>
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
          {question.type === "single" ? (
            <>
              <TextField
                placeholder="Type here..."
                value={text}
                onChangeText={setText}
                focusable={true}
                style={{
                  flexGrow: 1,
                }}
              />
              <Button title="Submit" onPress={() => onChoice?.("Yes")}></Button>
            </>
          ) : (
            question.answers.map((choice) => (
              <TouchableHighlight
                key={choice}
                style={{
                  backgroundColor: "white",
                  padding: 8,
                  borderRadius: 8,
                  flexGrow: 1,
                  alignItems: "center",
                }}
                onPress={() => {
                  onChoice?.(choice);
                }}
                underlayColor={"#f0f0f0"}
              >
                <Text>{choice}</Text>
              </TouchableHighlight>
            ))
          )}
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({});
const layoutAnimConfig = {
  duration: 600,
  update: {
    type: LayoutAnimation.Types.easeInEaseOut,
  },
  delete: {
    duration: 600,
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.opacity,
  },
};
