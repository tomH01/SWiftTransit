import { View, ViewProps } from "react-native";

export function ProgressBar({
  progress,
  color,
  backgroundColor,
  height,
  style,
}: ViewProps & {
  progress: number;
  color: string;
  height?: number;
  backgroundColor: string;
}) {
  return (
    <View
      style={[
        {
          backgroundColor: backgroundColor,
          borderRadius: 100,
          height: height ?? 8,
          overflow: "hidden",
          borderColor: "black",
          borderWidth: 0.2,
        },
        style,
      ]}
    >
      <View
        style={{
          backgroundColor: color,
          height: "100%",
          width: `${progress * 100}%`,
        }}
      />
    </View>
  );
}
