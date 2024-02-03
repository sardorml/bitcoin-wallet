import { StatusBar } from "expo-status-bar";
import { Button, Text, View } from "tamagui";
import { Wallet } from "@tamagui/lucide-icons";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { router } from "expo-router";

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
    <View flex={1} alignItems="center" bg="white" justifyContent="center">
      <Text y="$-5" fontSize={20}>
        Create your first ever Bitcoin wallet
      </Text>
      <Button
        alignSelf="center"
        icon={Wallet}
        size="$6"
        bg="#6366f1"
        color="white"
        onPress={() => router.push("/create")}
      >
        Create wallet
      </Button>

      <StatusBar style="auto" />
    </View>
  );
}
