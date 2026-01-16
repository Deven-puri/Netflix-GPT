import { API_OPTIONS } from "../utils/constants.tsx";

interface VideoTitleProps {
    title: string;
    overview: string;
    movieId: number;
}

const VideoTitle = ({title, overview, movieId}: VideoTitleProps) => {
    const handlePlayClick = async () => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/${movieId}/videos`,
                API_OPTIONS
            );
            const data = await response.json();
            
            // Filter for trailer videos
            const trailers = data.results?.filter((video: any) => video.type === "Trailer" && video.site === "YouTube");
            const trailer = trailers?.length > 0 ? trailers[0] : data.results?.[0];
            
            if (trailer && trailer.key) {
                // Open YouTube trailer in a new tab
                window.open(`https://www.youtube.com/watch?v=${trailer.key}`, '_blank');
            }
        } catch (error) {
            // Silent fail - user can manually search if needed
        }
    };

    const handleMoreInfoClick = async () => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/${movieId}`,
                API_OPTIONS
            );
            const data = await response.json();
            
            if (data.imdb_id) {
                // Redirect to IMDB page using the IMDB ID
                window.open(`https://www.imdb.com/title/${data.imdb_id}`, '_blank');
            } else {
                // Fallback: search IMDB by title if no IMDB ID is available
                const searchQuery = encodeURIComponent(title);
                window.open(`https://www.imdb.com/find?q=${searchQuery}`, '_blank');
            }
        } catch (error) {
            // Fallback: search IMDB by title
            const searchQuery = encodeURIComponent(title);
            window.open(`https://www.imdb.com/find?q=${searchQuery}`, '_blank');
        }
    };

    return (
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end pb-6 sm:pb-12 md:justify-center px-4 sm:px-8 md:px-12 text-white bg-gradient-to-r from-black/80 via-black/40 to-transparent z-20 pointer-events-none">
            <div className="pointer-events-auto max-w-full sm:max-w-2xl md:max-w-3xl space-y-2 sm:space-y-4">
                <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold drop-shadow-xl">
                    {title}
                </h1>
                <p className="hidden sm:block text-xs sm:text-sm md:text-base lg:text-lg line-clamp-2 sm:line-clamp-3 md:line-clamp-4 drop-shadow-lg">
                    {overview}
                </p>
                <div className="flex flex-row gap-2 sm:gap-4 pt-1 sm:pt-2">
                    <button 
                        onClick={handlePlayClick}
                        className="bg-white text-black py-1.5 sm:py-2 md:py-3 px-4 sm:px-6 md:px-10 text-xs sm:text-sm md:text-base lg:text-lg font-semibold rounded hover:bg-opacity-80 transition-all duration-200 flex items-center justify-center gap-1 sm:gap-2 shadow-xl"
                    >
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                        Play
                    </button>
                    <button 
                        onClick={handleMoreInfoClick}
                        className="bg-gray-500 bg-opacity-70 text-white py-1.5 sm:py-2 md:py-3 px-4 sm:px-6 md:px-10 text-xs sm:text-sm md:text-base lg:text-lg font-semibold rounded hover:bg-opacity-50 transition-all duration-200 flex items-center justify-center gap-1 sm:gap-2 shadow-xl"
                    >
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                        </svg>
                        More Info
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VideoTitle;