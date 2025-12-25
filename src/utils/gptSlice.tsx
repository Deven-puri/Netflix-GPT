import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGPTSearch: false,
        GPTMovies: null,
        movieResults: null,
        movieName: null,
    },
    reducers: {
        toggleGPTSearchView: (state) => {
            state.showGPTSearch = !state.showGPTSearch;
        },
        addGPTMovieResult: (state, action) => {
            const { movieName, movieResults } = action.payload;
            state.movieName = movieName;
            state.movieResults = movieResults;
        },
    },
});

export const { toggleGPTSearchView, addGPTMovieResult } = gptSlice.actions;
export default gptSlice.reducer;

