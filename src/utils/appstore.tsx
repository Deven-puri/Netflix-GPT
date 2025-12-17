import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.tsx";

const appStore = configureStore({
    reducer: {
        user: userReducer,
    },
});

export default appStore;