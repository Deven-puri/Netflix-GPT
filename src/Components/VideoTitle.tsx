interface VideoTitleProps {
    title: string;
    overview: string;
}

const VideoTitle = ({title, overview}: VideoTitleProps) => {
    return (
        <div className="w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-6xl font-bold mb-4">
                {title}
            </h1>
            <p className="py-6 text-lg w-1/4">
                {overview}
            </p>
            <div className="flex gap-4">
                <button className="bg-white text-black py-4 px-12 text-xl rounded-lg hover:bg-gray-500/50 transition-all duration-200 flex items-center gap-2">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                    </svg>
                    Play
                </button>
                <button className="bg-gray-500 bg-opacity-50 text-white py-4 px-12 text-xl rounded-lg hover:bg-opacity-30 flex items-center gap-2">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                    </svg>
                    More Info
                </button>
            </div>
        </div>
    );
};

export default VideoTitle;