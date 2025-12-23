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
            console.log("Trending Movies API Response:", json);
            dispatch(addTrendingMovies(json.results));
        } catch (error) {
            console.error("Error fetching trending movies:", error);
        }
    };
    
    useEffect(() => {
        getTrendingMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};

export default useTrendingMovies;
