import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentAccount: {
    id: 1,
    username: "cobanyasin1998",
    fullName: "Yasin Çoban",
    logoUrl:
      "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png",
  },
  accounts: [
    {
      id: 1,
      username: "cobanyasin1998",
      fullName: "Yasin Çoban",
      logoUrl:
        "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png",
    },
    {
      id: 2,
      username: "yazilimWorld",
      fullName: "Yazılım Dünyası",
      logoUrl:
        "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png",
    },
  ],
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    _addAccounts: (state, action) => {
      state.accounts.push(action.payload);
    },
    _removeAccounts: (state, action) => {
      state.accounts = state.accounts.filter(
        (account) => account.id !== action.payload
      );
      if (state.currentAccount.id === action.payload) {
        state.currentAccount = false;
      }
    },
    _setCurrentAccount: (state, action) => {
      state.currentAccount = action.payload;
    },
  },
});

export const { _addAccounts, _removeAccounts, _setCurrentAccount } =
  auth.actions;
export default auth.reducer;
