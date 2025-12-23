import MovieCard from "./MovieCard.tsx";

interface MovieListProps {
    title: string;
    movies: any[];
}

const MovieList = ({ title, movies }: MovieListProps) => {
    if (!movies || movies.length === 0) return null;
    
    const isNowPlaying = title === "Now Playing";
    
    return (
        <div className={`px-6 ${isNowPlaying ? 'bg-transparent py-2' : 'py-4'}`}>
            <h1 className={`${isNowPlaying ? 'text-xl py-2' : 'text-2xl md:text-3xl py-4'} font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]`}>{title}</h1>
            <div className="flex overflow-x-auto overflow-y-hidden scrollbar-hide">
                <div className="flex gap-2">
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} posterPath={movie.poster_path} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieList;