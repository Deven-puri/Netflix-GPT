import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer.tsx";

const VideoBackground = ({ movieId }: { movieId: number }) => {
    const trailerVideo = useSelector((store: any) => store.movies?.trailerVideo);
    
    useMovieTrailer(movieId);
    
    return (
        <div className="w-screen h-screen absolute">
            <iframe
                className="w-full absolute -z-10 aspect-video object-cover"
                src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo?.key}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
        </div>
    );
            
    
};

export default VideoBackground;
