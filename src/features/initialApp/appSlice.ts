import { RootState } from "./../../app/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { type } from "os";
interface InititalState {
  language: "vi" | "en";
}
export type Language = "vi" | "en";
const initialState: InititalState = {
  language: "vi",
};
const appSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    actionSetlanguage: (state, action: PayloadAction<Language>) => {
      state.language = action.payload;
    },
  },
});

//action
export const { actionSetlanguage } = appSlice.actions;
//selector
export const getLanguage = (state: RootState) => state.app.language;
//reducer
const appReducer = appSlice.reducer;
export default appReducer;
