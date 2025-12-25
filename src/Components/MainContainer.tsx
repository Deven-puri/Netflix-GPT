import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle.tsx";
import VideoBackground from "./VideoBackground.tsx";

const MainContainer = () => {
    const movies = useSelector((store: any) => store.movies?.nowPlayingMovies);
    if(!movies || movies.length === 0) return null;
    const mainMovie = movies[0];
    const {original_title, overview, id} = mainMovie;
    
    return (
        <div className="relative w-full aspect-[16/9] max-h-[100vh] min-h-[200px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-[500px] mt-[60px] sm:mt-0">
            <VideoBackground movieId={id} />
            <VideoTitle title={original_title} overview={overview} />
        </div>
    );
};

export default MainContainer;