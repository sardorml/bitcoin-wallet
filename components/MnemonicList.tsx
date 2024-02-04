import { Text, View, styled } from "tamagui";

const StyledView = styled(View, {
  height: 80,
  backgroundColor: "#f1f5f9",
  borderRadius: 10,
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  flexBasis: "40%",
});

function ListItem({ word }: { word: string }) {
  return (
    <StyledView>
      <Text fontSize={20}>{word}</Text>
    </StyledView>
  );
}

export default function MnemonicList({ mnemonic }: { mnemonic: string }) {
  return (
    <View flexDirection="row" flexWrap="wrap" gap={15} padding={10}>
      {mnemonic.split(" ").map((item: string) => (
        <ListItem word={item} key={item} />
      ))}
    </View>
  );
}
