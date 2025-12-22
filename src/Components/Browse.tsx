import Header from "./Header.tsx";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies.tsx";
import MainContainer from "./MainContainer.tsx";
import SecondaryContainer from "./SecondaryContainer.tsx";

const Browse = () => {
    useNowPlayingMovies();

    return (
        <div>
            <Header />
            <MainContainer />
            <SecondaryContainer />
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