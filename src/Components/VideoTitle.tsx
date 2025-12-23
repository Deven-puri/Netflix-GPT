interface VideoTitleProps {
    title: string;
    overview: string;
}

const VideoTitle = ({title, overview}: VideoTitleProps) => {
    return (
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-12 text-white bg-gradient-to-r from-black/80 via-black/40 to-transparent z-20 pointer-events-none">
            <div className="pointer-events-auto">
            <h1 className="text-5xl font-bold mb-4">
                {title}
            </h1>
            <p className="py-4 text-base w-1/3">
                {overview}
            </p>
            <div className="flex gap-4">
                <button className="bg-white text-black py-3 px-10 text-lg rounded-lg hover:bg-opacity-50 transition-all duration-200 flex items-center gap-2">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                    </svg>
                    Play
                </button>
                <button className="bg-gray-500 bg-opacity-50 text-white py-3 px-10 text-lg rounded-lg hover:bg-opacity-30 flex items-center gap-2">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
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