import React, { useRef, useState } from "react";
import { BG_URL } from "../utils/constants.tsx";
import lang from "../utils/LanguageConstants.tsx";
import { useSelector, useDispatch } from "react-redux";
import { groqCompletion } from "../utils/GROQAI.tsx";
import { addGPTMovieResult } from "../utils/gptSlice.tsx";

const langMap: Record<string, keyof typeof lang> = {
    en: 'english',
    hi: 'hindi',
    es: 'spanish',
    ur: 'urdu',
};
const GPTSearchBar = () => {
    const dispatch = useDispatch();
    const langKey = useSelector((state: any) => state.config?.language);
    const mappedKey = langMap[langKey] || 'english';
    const selectedLang = lang[mappedKey];
    const searchText = useRef<HTMLInputElement>(null);
    const [gptResult, setGptResult] = useState<React.ReactNode>("");
    const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;
    const searchMovieTMDB = async (Movie: string) => {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(Movie)}&include_adult=false&language=en-US&page=1`);
        const json = await response.json();
        return json.results;
    };

    const handleGptSearchClick = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!searchText.current?.value) return;
        setGptResult("");
        const gptQuery =
            "Act as a Movie Recommendation system and suggest some movies for the query: " +
            searchText.current.value + ". Only give me names of 5 movies. comma separated like the example result given ahead. Example result: Gadar, golmal, koi mil gaya, avengers, kis kis ko pyaar karoon";
        try {
            const response = await groqCompletion(gptQuery);
            let movieString = "";
            if ('error' in response) {
                setGptResult("Error: " + response.error);
                return;
            }
            if (
                response.choices &&
                response.choices[0] &&
                response.choices[0].message &&
                response.choices[0].message.content
            ) {
                movieString = response.choices[0].message.content;
            } else {
                setGptResult("No result from Groq API.");
                return;
            }

            // Convert movieString to array
            const getMovies = movieString.split(',').map(m => m.trim()).filter(Boolean);
            // Map over movies and create array of promises
            const promiseArray = getMovies.map(movie => searchMovieTMDB(movie));
            // Await all TMDB results
            const tmdbresult = await Promise.all(promiseArray);
            // Dispatch the movie array to Redux using the correct action
            dispatch(addGPTMovieResult({ movieName: getMovies, movieResults: tmdbresult }));
        } catch (err: any) {
            setGptResult("Groq API error: " + (err?.message || String(err)));
        }
    };

    return (
        <div className="relative min-h-screen w-full flex flex-col items-start justify-center pt-[10%]">
            <div className="absolute inset-0 -z-10">
                <img
                    src={BG_URL}
                    alt="Netflix background"
                    className="h-full w-full object-cover "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
            </div>
            <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2 z-10 w-[400px]">
                <form
                    className="flex justify-center items-center gap-2 p-4 bg-black bg-opacity-60 rounded-lg shadow-lg"
                    onSubmit={handleGptSearchClick}
                >
                    <input
                        ref={searchText}
                        type="text"
                        className="px-4 py-2 rounded-lg focus:outline-none w-80 text-black"
                        placeholder={selectedLang.placeHolder}
                    />
                    <button
                        type="submit"
                        className="px-6 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition"
                    >
                        {selectedLang.search}
                    </button>
                </form>
            </div>
            {gptResult && (
                <div className="w-full max-w-xl mt-6 bg-black/80 rounded-lg shadow-lg p-6 text-white">
                    <h3 className="text-lg font-bold mb-2">Movie Recommendations:</h3>
                    <div>{gptResult}</div>
                </div>
            )}
        </div>
    );
}

export default GPTSearchBar;