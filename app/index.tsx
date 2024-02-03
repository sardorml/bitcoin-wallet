import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { mnemonic, generateWallet } from "../helpers/bitcoin";
import { Button } from "tamagui";
import { Airplay } from "@tamagui/lucide-icons";
import { useFonts } from "expo-font";
import { useEffect } from "react";

console.log(mnemonic);
console.log(generateWallet(mnemonic));

export default function App() {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  useEffect(() => {
    if (loaded) {
      // can hide splash screen here
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text>Bitcoin wallet</Text>
      <Button alignSelf="center" icon={Airplay} size="$6">
        Large
      </Button>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
