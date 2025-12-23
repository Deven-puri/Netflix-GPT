import React from "react";
import { BG_URL } from "../utils/constants.tsx";
import { FaSearch } from "react-icons/fa";
import lang from "../utils/LanguageConstants.tsx";
import { useSelector } from "react-redux";
import { SUPPORTED_LANGUAGES } from "../utils/constants.tsx";

const langMap: Record<string, keyof typeof lang> = {
    en: 'english',
    hi: 'hindi',
    es: 'spanish',
    ur: 'urdu',
};
const GPTSearchBar = () => {
    const langKey = useSelector((state: any) => state.config?.language);
    const mappedKey = langMap[langKey] || 'english';
    const selectedLang = lang[mappedKey];
    return (
        <div className="relative min-h-screen w-full flex items-start justify-center pt-[10%]">
            <div className="absolute inset-0 -z-10">
                <img
                    src={BG_URL}
                    alt="Netflix background"
                    className="h-full w-full object-cover "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
            </div>
            <form className="flex w-full max-w-xl bg-black/80 rounded-lg shadow-lg p-6 items-center justify-center gap-2">
                <input
                    type="text"
                    className="flex-1 rounded-l bg-zinc-900 border border-gray-600 px-4 py-3 text-base text-white outline-none focus:border-red-500"
                    placeholder={selectedLang.placeHolder}
                />
                <button
                    type="submit"
                    className="flex items-center gap-2 rounded-r bg-gradient-to-r from-red-600 to-red-400 px-6 py-3 text-lg font-bold text-white shadow-md hover:from-red-700 hover:to-red-500 transition"
                >
                    <FaSearch className="text-xl" />
                    <span className=" sm:inline">{selectedLang.search}</span>
                </button>
            </form>
        </div>
    );
};
export default GPTSearchBar;