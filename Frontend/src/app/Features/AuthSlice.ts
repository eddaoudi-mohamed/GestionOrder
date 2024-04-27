import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CurrentUser } from "../../types/user";
import { RootState } from "../Store";

interface AuthState {
  user: CurrentUser | null;
  token: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  // token: `${process.env.REACT_APP_API_KEY}`,
  token: "8QPGRloiSCW0ffe6l7TYpNv4ti3XAlbV7",
  isAuthenticated: false,
};

const authReducer = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    SetCredentials: (state, action: PayloadAction<{ User: CurrentUser }>) => {
      const { User } = action.payload;
      state.user = User;
      state.isAuthenticated = true;
    },
    logOut: (state) => {
      state.user = null;
      state.isAuthenticated = false;

    },
  },
});

export const { SetCredentials, logOut } = authReducer.actions;

export default authReducer.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectAuth = (state: RootState) => state.auth.isAuthenticated;
