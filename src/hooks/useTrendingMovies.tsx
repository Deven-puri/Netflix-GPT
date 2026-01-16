import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants.tsx";
import { addTrendingMovies } from "../utils/MovieSlice.tsx";

const useTrendingMovies = () => {
    const dispatch = useDispatch();
    
    const getTrendingMovies = async () => {
        try {
            const data = await fetch('https://api.themoviedb.org/3/trending/movie/day?page=1', API_OPTIONS);
            const json = await data.json();
            dispatch(addTrendingMovies(json.results));
        } catch (error) {
            // Silent fail - movies won't load but app continues
        }
    };
    
    useEffect(() => {
        getTrendingMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};

export default useTrendingMovies;
