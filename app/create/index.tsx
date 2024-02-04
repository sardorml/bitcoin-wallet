import { View, Text, Button } from "tamagui";
import { Wallet } from "@tamagui/lucide-icons";
import MnemonicList from "../../components/MnemonicList";
import { mnemonic, generateWallet } from "../../helpers/bitcoin";
import { router } from "expo-router";

export default function CreateWallet() {
  function handleGeneratePrivateKey() {
    const wallet = generateWallet(mnemonic);
    console.log(wallet);
    router.push("/wallet");
  }
  return (
    <View flex={1} alignItems="center" bg="white">
      <Text paddingTop="$5" fontSize={18}>
        This is your 12 word seed phrase
      </Text>
      <Text fontSize={16} paddingTop={10} color="#64748b">
        Take a screenshot and keep it safe
      </Text>
      <MnemonicList mnemonic={mnemonic} />
      <View padding={10} alignItems="center" width="100%">
        <Button
          bg="#6366f1"
          color="white"
          width="100%"
          size="$6"
          onPress={() => handleGeneratePrivateKey()}
        >
          Generate Private Key
        </Button>
      </View>
    </View>
  );
}
