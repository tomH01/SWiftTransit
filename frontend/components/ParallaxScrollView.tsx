import type { PropsWithChildren, ReactElement } from "react";
import { StyleSheet, useColorScheme, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";

import { ThemedView } from "@/components/ThemedView";

const HEADER_HEIGHT = 250;

type Props = PropsWithChildren<{
  headerImage: ReactElement;
  headerContent: ReactElement;
  headerBackgroundColor: { dark: string; light: string };
}>;

export default function ParallaxScrollView({
  children,
  headerImage,
  headerContent,
  headerBackgroundColor,
}: Props) {
  const colorScheme = useColorScheme() ?? "light";

  return (
    <ThemedView style={styles.container}>
      <View>
        <View
          style={[
            styles.header,
            {
              backgroundColor: headerBackgroundColor[colorScheme],
              position: "relative",
            },
          ]}
        >
          {headerImage}
        </View>
        <View
          style={{
            position: "absolute",
            bottom: 20,
            padding: 16,
            shadowColor: "black",
            shadowOpacity: 1,
            shadowRadius: 4,
            shadowOffset: { width: 0, height: 2 },
          }}
        >
          {headerContent}
        </View>
      </View>
      <ThemedView style={styles.content}>{children}</ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 256,
    overflow: "hidden",
  },
  content: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: "hidden",
    borderRadius: 32,
    marginTop: -32,
  },
});
