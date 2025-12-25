import { IMG_CDN_URL } from "../utils/constants.tsx";

interface MovieCardProps {
    posterPath: string;
}

const MovieCard = ({ posterPath }: MovieCardProps) => {
    if (!posterPath) return null;
    
    return (
        <div className="w-24 sm:w-32 md:w-40 lg:w-48 pr-2 sm:pr-4 flex-shrink-0 transition-transform duration-300 hover:scale-110 hover:z-10">
            <img 
                alt="MovieCard" 
                src={IMG_CDN_URL + posterPath}
                className="w-full h-auto rounded-lg cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
            />
        </div>
    );
};

export default MovieCard;