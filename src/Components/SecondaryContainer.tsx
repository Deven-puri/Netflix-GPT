import { useSelector } from "react-redux";
import MovieList from "./MovieList.tsx";

const SecondaryContainer = () => {
    const movies = useSelector((store: any) => store.movies);
    const nowPlayingMovies = movies?.nowPlayingMovies;
    
    if (!nowPlayingMovies || nowPlayingMovies.length === 0) return null;
    
    return (
        <div className="bg-black">
            <div className="-mt-52 relative z-20">
            <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
            <MovieList title="Trending" movies={movies.trendingMovies } />
            <MovieList title="Popular" movies={movies.popularMovies } />
            <MovieList title="Upcoming Movies" movies={movies.nowPlayingMovies} />
            <MovieList title="Horror" movies={nowPlayingMovies} />
            </div>
        </div>
    );
};

export default SecondaryContainer;
