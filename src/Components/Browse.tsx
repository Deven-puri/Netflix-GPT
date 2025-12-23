import Header from "./Header.tsx";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies.tsx";
import usePopularMovies from "../hooks/usePopularMovies.tsx";
import useTrendingMovies from "../hooks/useTrendingMovies.tsx";
import MainContainer from "./MainContainer.tsx";
import SecondaryContainer from "./SecondaryContainer.tsx";
import GPTSearch from "./GPTSearch.tsx";
import { useSelector } from "react-redux";

const Browse = () => {
    const showGPTSearch = useSelector((store: any) => store.gpt?.showGPTSearch);
    useNowPlayingMovies();
    usePopularMovies();
    useTrendingMovies();

    return (
        <div className="relative overflow-x-hidden">
            <Header />
            {showGPTSearch ? (
                <GPTSearch />
            ) : (
                <>
                    <MainContainer />
            <SecondaryContainer />
            </>)}

            
            {/* <GPTSearch/> */}
            {/*
            MainContainer
                - VideoBackground
                - Content
            SecondaruyContainer
                - MovieList X n
                    - Cards X n
            */}
        </div>
    );
};

export default Browse;