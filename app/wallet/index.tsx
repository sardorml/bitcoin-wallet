import { View, Text, Button, styled } from "tamagui";
import { Wallet2, Copy, Bitcoin, KeySquare } from "@tamagui/lucide-icons";

const TextWrapped = styled(Text, {
  flex: 1,
  flexWrap: "wrap",
  flexShrink: 1,
});

function ListItem({
  icon,
  name,
  detail,
}: {
  icon: any;
  name: string;
  detail: string;
}) {
  return (
    <View minWidth="100%">
      <Text fontSize={16} marginVertical={5} alignSelf="flex-start">
        {name}
      </Text>
      <View
        flexDirection="row"
        alignItems="center"
        bg="$gray2"
        borderRadius={20}
      >
        <Button
          icon={icon}
          bg="#3b82f6"
          color="white"
          borderBottomRightRadius={0}
          borderTopRightRadius={0}
        />
        <TextWrapped paddingHorizontal={10}>{detail}</TextWrapped>
        <Button
          icon={Copy}
          bg="$gray6"
          borderBottomLeftRadius={0}
          borderTopLeftRadius={0}
        />
      </View>
    </View>
  );
}

export default function Wallet() {
  return (
    <View bg="white" flex={1} alignItems="center" paddingHorizontal={10}>
      <Button
        bg="white"
        icon={Bitcoin}
        size={300}
        padding={80}
        marginTop={20}
        color={"$orange8"}
      />
      <Text fontSize={20} marginVertical={20}>
        My Bitcoin wallet
      </Text>
      <View gap={10}>
        <ListItem
          icon={Wallet2}
          name="Address"
          detail="1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"
        />
        <ListItem
          icon={KeySquare}
          name="PrivateKey"
          detail="e752b29a53449c00df1ce1baf1d848bdfd1d06e7b289b1b3cda5d58ccd432491"
        />
        <ListItem
          icon={KeySquare}
          name="PuplicKey"
          detail="03910bc0e2a02b501ed88b4ab4a36cd967af99abd927d4f0cc7e9353ccf92ff113"
        />
      </View>
    </View>
  );
}
