import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.tsx";
import moviesReducer from "./MovieSlice.tsx";
import gptReducer from "./gptSlice.tsx";
import configReducer from "./configSlice.tsx";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gpt: gptReducer,
        config: configReducer,
    },
});

export default appStore;