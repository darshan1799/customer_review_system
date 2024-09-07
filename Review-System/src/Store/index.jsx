import { configureStore, createSlice } from "@reduxjs/toolkit";

const ProtectRoutesSlice = createSlice({
  name: "ProtectRoute",
  initialState: false,
  reducers: {
    changeAuthState: (state, action) => {
      return action.payload;
    },
  },
});

export const ProtectRouteAction = ProtectRoutesSlice.actions;

const store = configureStore({
  reducer: { isAuthenticated: ProtectRoutesSlice.reducer },
});

export default store;
