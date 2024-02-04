import { View, Text, Button, styled } from "tamagui";
import { Wallet2, Copy, Bitcoin, KeySquare } from "@tamagui/lucide-icons";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

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
  const wallet = useSelector((state: RootState) => state.wallet);
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
        <ListItem icon={Wallet2} name="Address" detail={wallet.address} />
        <ListItem
          icon={KeySquare}
          name="PrivateKey"
          detail={wallet.privateKey}
        />
        <ListItem icon={KeySquare} name="PuplicKey" detail={wallet.publicKey} />
      </View>
    </View>
  );
}
