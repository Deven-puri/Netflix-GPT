import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants.tsx";
import { addPopularMovies } from "../utils/MovieSlice.tsx";

const usePopularMovies = () => {
    const dispatch = useDispatch();
    
    const getPopularMovies = async () => {
        try {
            const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
            const json = await data.json();
            dispatch(addPopularMovies(json.results));
        } catch (error) {
            // Silent fail - movies won't load but app continues
        }
    };
    
    useEffect(() => {
        getPopularMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};

export default usePopularMovies;
