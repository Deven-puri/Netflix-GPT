import { useSelector } from "react-redux";
import MovieList from "./MovieList.tsx";
import { addGPTMovieResult } from "../utils/gptSlice.tsx";
const GPTMovieSuggestion = () => {
        
    const { movieResults, movieName } = useSelector((store: any) => store.gpt);
    if (!movieName || !movieResults) return null;
    return (
        <div className="absolute top-[25%] left-0 right-0 w-full p-4 bg-transparent text-white z-20absolute top-[25%] left-0 right-0 w-full p-4 bg-black text-white z-20">
            {movieName.map((name: string, index: number) => {
                const movies = (movieResults[index] || []).filter((m: any) => m && m.poster_path && m.id);
                console.log(`MovieList for '${name}':`, movies);
                return (
                    <MovieList
                        key={name}
                        title={name}
                        movies={movies}
                    />
                );
                
            })}
        </div>
    );
};


export default GPTMovieSuggestion;