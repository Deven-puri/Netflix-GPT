import { IMG_CDN_URL, API_OPTIONS } from "../utils/constants.tsx";

interface MovieCardProps {
    posterPath: string;
    movieId?: number;
    fixedSize?: boolean;
}

const MovieCard = ({ posterPath, movieId, fixedSize = false }: MovieCardProps) => {
    if (!posterPath) return null;
    
    const handleCardClick = async () => {
        if (!movieId) return;
        
        try {
            // First, try to get the trailer
            const videoResponse = await fetch(
                `https://api.themoviedb.org/3/movie/${movieId}/videos`,
                API_OPTIONS
            );
            const videoData = await videoResponse.json();
            
            // Filter for trailer videos
            const trailers = videoData.results?.filter((video: any) => video.type === "Trailer" && video.site === "YouTube");
            const trailer = trailers?.length > 0 ? trailers[0] : videoData.results?.[0];
            
            if (trailer && trailer.key) {
                // Open YouTube trailer in a new tab
                window.open(`https://www.youtube.com/watch?v=${trailer.key}`, '_blank');
            } else {
                // If no trailer found, fetch movie details and redirect to IMDB
                const movieResponse = await fetch(
                    `https://api.themoviedb.org/3/movie/${movieId}`,
                    API_OPTIONS
                );
                const movieData = await movieResponse.json();
                
                if (movieData.imdb_id) {
                    // Redirect to IMDB page using the IMDB ID
                    window.open(`https://www.imdb.com/title/${movieData.imdb_id}`, '_blank');
                } else {
                    // Fallback: search IMDB by title if no IMDB ID is available
                    const searchQuery = encodeURIComponent(movieData.title || movieData.original_title || '');
                    window.open(`https://www.imdb.com/find?q=${searchQuery}`, '_blank');
                }
            }
        } catch (error) {
            // Final fallback: try to get movie details for IMDB redirect
            try {
                const movieResponse = await fetch(
                    `https://api.themoviedb.org/3/movie/${movieId}`,
                    API_OPTIONS
                );
                const movieData = await movieResponse.json();
                
                if (movieData.imdb_id) {
                    window.open(`https://www.imdb.com/title/${movieData.imdb_id}`, '_blank');
                } else {
                    const searchQuery = encodeURIComponent(movieData.title || movieData.original_title || '');
                    window.open(`https://www.imdb.com/find?q=${searchQuery}`, '_blank');
                }
            } catch (fallbackError) {
                // Silent fail - user can manually search if needed
            }
        }
    };
    
    return (
        <div 
            className={fixedSize ? "w-40 h-60 pr-2 sm:pr-4 flex-shrink-0 transition-transform duration-300 hover:scale-110 hover:z-10" : "w-24 sm:w-32 md:w-40 lg:w-48 pr-2 sm:pr-4 flex-shrink-0 transition-transform duration-300 hover:scale-110 hover:z-10"}
            onClick={handleCardClick}
        >
            <img 
                alt="MovieCard" 
                src={IMG_CDN_URL + posterPath}
                className={fixedSize ? "w-full h-full object-cover rounded-lg cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300" : "w-full h-auto rounded-lg cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"}
            />
        </div>
    );
};

export default MovieCard;