import Header from "./Header.tsx";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies.tsx";
import usePopularMovies from "../hooks/usePopularMovies.tsx";
import useTrendingMovies from "../hooks/useTrendingMovies.tsx";
import MainContainer from "./MainContainer.tsx";
import SecondaryContainer from "./SecondaryContainer.tsx";
import GPTSearch from "./GPTSearch.tsx";
import { useSelector } from "react-redux";
import GPTMovieSuggestion from "./GPTMovieSuggestion.tsx";
import { BG_URL } from "../utils/constants.tsx";
const Browse = () => {
    const showGPTSearch = useSelector((store: any) => store.gpt?.showGPTSearch);
    useNowPlayingMovies();
    usePopularMovies();
    useTrendingMovies();
    
    return (
        <div className="relative overflow-x-hidden bg-black min-h-screen">
            <Header />
            {/* Background image at the top, black background persists below */}
            <div className="absolute top-0 left-0 w-full h-[600px] -z-10">
                <img
                    src={BG_URL}
                    alt="Netflix background"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black" />
            </div>
            <div className="relative z-10">
                {showGPTSearch ? (
                    <>
                        <GPTSearch />
                        <GPTMovieSuggestion />
                    </>
                ) : (
                    <>
                        <MainContainer />
                        <SecondaryContainer />
                    </>
                )}
            </div>
        </div>
    );
};

export default Browse;