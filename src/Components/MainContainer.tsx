import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle.tsx";
import VideoBackground from "./VideoBackground.tsx";

const MainContainer = () => {
    const movies = useSelector((store: any) => store.movies?.nowPlayingMovies);
    if(!movies || movies.length === 0) return null;
    const mainMovie = movies[0];
    const {original_title, overview, id} = mainMovie;
    console.log("Main Container Movie:", mainMovie);
    return (
        <div>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id} />
        </div>
    );
};

export default MainContainer;