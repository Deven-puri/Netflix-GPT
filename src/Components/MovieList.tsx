import MovieCard from "./MovieCard.tsx";

interface MovieListProps {
    title: string;
    movies: any[];
    fixedSize?: boolean;
}

const MovieList = ({ title, movies, fixedSize = false }: MovieListProps) => {
    if (!movies || movies.length === 0) return null;
    
    const isNowPlaying = title === "Now Playing";
    
    return (
        <div className={`px-2 sm:px-4 md:px-6 ${isNowPlaying ? 'bg-transparent py-2' : 'py-2 sm:py-4'}`}>
            <h1 className={`${isNowPlaying ? 'text-lg sm:text-xl py-2' : 'text-xl sm:text-2xl md:text-3xl py-2 sm:py-4'} font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]`}>{title}</h1>
            <div className="flex overflow-x-auto overflow-y-hidden scrollbar-hide">
                <div className="flex gap-1 sm:gap-2">
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} posterPath={movie.poster_path} movieId={movie.id} fixedSize={fixedSize} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieList;