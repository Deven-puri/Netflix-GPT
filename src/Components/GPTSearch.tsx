import React from "react";
import { useSelector } from "react-redux";
import GPTSearchBar from "./GPTSearchBar.tsx";

const GPTSearch = () => {
    const showGPTSearch = useSelector((state: any) => state.gpt.showGPTSearch);
    if (!showGPTSearch) return null;
    return (
        <GPTSearchBar />
    );
};

export default GPTSearch;
