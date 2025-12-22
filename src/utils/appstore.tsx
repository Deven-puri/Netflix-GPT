import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.tsx";
import moviesReducer from "./MovieSlice.tsx";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
    },
});

export default appStore;