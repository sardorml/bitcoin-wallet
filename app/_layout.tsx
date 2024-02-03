import { Stack } from "expo-router";
import { TamaguiProvider } from "tamagui";

import { config } from "../tamagui.config";

export default function RootLayout() {
  return (
    <TamaguiProvider config={config}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerTitle: "Bitcoin wallet",
          }}
        />
        <Stack.Screen
          name="create/index"
          options={{
            headerTitle: "Create wallet",
          }}
        />
        <Stack.Screen name="send/index" />
      </Stack>
    </TamaguiProvider>
  );
}
