import { useSelector } from "react-redux";
import MovieList from "./MovieList.tsx";

const SecondaryContainer = () => {
    const movies = useSelector((store: any) => store.movies?.nowPlayingMovies);
    
    if (!movies || movies.length === 0) return null;
    
    return (
        <div className="bg-black">
            <div className="-mt-52 relative z-20">
                <MovieList title="Now Playing" movies={movies} />
            </div>
        </div>
    );
};

export default SecondaryContainer;
