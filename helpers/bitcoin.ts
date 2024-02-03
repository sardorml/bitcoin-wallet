import "react-native-get-random-values";
global.Buffer = require("buffer").Buffer;
const bip39 = require("bip39");
const ecc = require("tiny-secp256k1");
const { BIP32Factory } = require("bip32");
// You must wrap a tiny-secp256k1 compatible implementation
const bip32 = BIP32Factory(ecc);
const bitcoin = require("bitcoinjs-lib");
// Change this to mainnet for production
const network = bitcoin.networks.testnet;

export const mnemonic = bip39.generateMnemonic();

export const generateWallet = (mnemonic: Array<string>) => {
  const seed = bip39.mnemonicToSeedSync(mnemonic);
  const root = bip32.fromSeed(seed, network);
  const child = root.derivePath("m/44'/1'/0'/0/0");
  const privateKey = child.privateKey.toString("hex");
  const publicKey = child.publicKey.toString("hex");
  const { address } = bitcoin.payments.p2pkh({
    pubkey: child.publicKey,
    network,
  });
  return { privateKey, publicKey, address };
};
