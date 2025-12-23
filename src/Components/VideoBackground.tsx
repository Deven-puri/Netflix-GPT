import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer.tsx";

const VideoBackground = ({ movieId }: { movieId: number }) => {
    const trailerVideo = useSelector((store: any) => store.movies?.trailerVideo);
    
    useMovieTrailer(movieId);
    
    return (
        <div className="w-full h-full absolute bg-transparent top-0 left-0 overflow-hidden">
            <iframe
                className="w-full h-full absolute top-0 left-0"
                src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo?.key}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
        </div>
    );
            
    
};

export default VideoBackground;
