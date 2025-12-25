import { useSelector } from "react-redux";
import MovieList from "./MovieList.tsx";

const SecondaryContainer = () => {
    const movies = useSelector((store: any) => store.movies);
    const nowPlayingMovies = movies?.nowPlayingMovies;
    
    if (!nowPlayingMovies || nowPlayingMovies.length === 0) return null;
    
    return (
        <div className="bg-black w-full px-2 sm:px-4 md:px-8 lg:px-16">
            <div className="relative z-20 -mt-8 sm:-mt-16 md:-mt-32 lg:-mt-52 flex flex-col gap-4 sm:gap-8 md:gap-10 lg:gap-12 pb-8">
                <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
                <MovieList title="Trending" movies={movies.trendingMovies} />
                <MovieList title="Popular" movies={movies.popularMovies} />
                <MovieList title="Upcoming Movies" movies={movies.nowPlayingMovies} />
                <MovieList title="Horror" movies={nowPlayingMovies} />
            </div>
        </div>
    );
};

export default SecondaryContainer;