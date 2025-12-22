import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants.tsx";
import { addTrailerVideo } from "../utils/MovieSlice.tsx";

const useMovieTrailer = (movieId: number) => {
    const dispatch = useDispatch();
    
    const getMovieVideo = async () => {
        const data = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/videos`,
            API_OPTIONS
        );
        const json = await data.json();
        console.log("Movie Videos:", json);
        const filterData = json.results.filter((video: any) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        console.log("trailer:", trailer);
        dispatch(addTrailerVideo(trailer));
    };

    useEffect(() => {
        getMovieVideo();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};

export default useMovieTrailer;