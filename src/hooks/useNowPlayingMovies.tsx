import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants.tsx";
import { addNowPlayingMovies } from "../utils/MovieSlice.tsx";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector((store: any) => store.movies.nowPlayingMovies);
    
    const getNowPlayingMovies = useCallback(async () => {
        try {
            const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
            const json = await data.json();
            dispatch(addNowPlayingMovies(json.results));
        } catch (error) {
            // Silent fail - movies won't load but app continues
        }
    }, [dispatch]);
    
    useEffect(() => {
        if(!nowPlayingMovies) getNowPlayingMovies();
    }, [nowPlayingMovies, getNowPlayingMovies]);
};

export default useNowPlayingMovies;