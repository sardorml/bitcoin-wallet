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
            headerBackTitle: "Back",
          }}
        />
        <Stack.Screen
          name="wallet/index"
          options={{
            headerTitle: "Wallet",
            headerBackVisible: false,
          }}
        />
      </Stack>
    </TamaguiProvider>
  );
}
