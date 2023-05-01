import { Text, View } from "react-native";

export default function Outlets() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#404040",
      }}
    >
      <Text style={{ color: "white", fontSize: 30, letterSpacing: 1 }}>
        Outlets
      </Text>
    </View>
  );
}
