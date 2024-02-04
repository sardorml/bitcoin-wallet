import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface WalletState {
  address: string;
  privateKey: string;
  publicKey: string;
}

const initialState: WalletState = {
  address: "",
  privateKey: "",
  publicKey: "",
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    setWallet: (state, action: PayloadAction<WalletState>) => {
      state.address = action.payload.address;
      state.privateKey = action.payload.privateKey;
      state.publicKey = action.payload.publicKey;
    },
  },
});

export const { setWallet } = walletSlice.actions;
export default walletSlice.reducer;
