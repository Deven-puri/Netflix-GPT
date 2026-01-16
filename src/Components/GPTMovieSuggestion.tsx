import { useSelector } from "react-redux";
import MovieList from "./MovieList.tsx";

const GPTMovieSuggestion = () => {
    const { movieResults, movieName } = useSelector((store: any) => store.gpt);
    if (!movieName || !movieResults) return null;
    return (
        <div className="absolute top-[25%] left-0 right-0 w-full p-4 bg-transparent text-white z-20">
            {movieName.map((name: string, index: number) => {
                const movies = (movieResults[index] || []).filter((m: any) => m && m.poster_path && m.id);
                return (
                    <MovieList
                        key={name}
                        title={name}
                        movies={movies}
                        fixedSize={true}
                    />
                );
            })}
        </div>
    );
};


export default GPTMovieSuggestion;