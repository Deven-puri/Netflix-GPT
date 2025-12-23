import { createSlice } from "@reduxjs/toolkit";
import lang from "./LanguageConstants";

const configSlice = createSlice({
    name: "config",
    initialState: {
        language: "en",
    },
    reducers: {
        changeLanguage: (state, action) => {
            state.language = action.payload;
        },
    },
});

export const { changeLanguage } = configSlice.actions;
export default configSlice.reducer;
