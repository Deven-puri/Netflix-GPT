import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle.tsx";
import VideoBackground from "./VideoBackground.tsx";
import MovieList from "./MovieList.tsx";

const MainContainer = () => {
    const popularMovies = useSelector((store: any) => store.movies?.popularMovies);
    const trendingMovies = useSelector((store: any) => store.movies?.trendingMovies);
    const movies = useSelector((store: any) => store.movies?.nowPlayingMovies);
    if(!movies || movies.length === 0) return null;
    const mainMovie = movies[0];
    const {original_title, overview, id} = mainMovie;
    console.log("Main Container Movie:", mainMovie);
    return (

        <div className="relative w-full aspect-video max-h-[100vh] min-h-[400px]">
            <VideoBackground movieId={id} />
            <VideoTitle title={original_title} overview={overview} />
        </div>
    
    );
};

export default MainContainer;