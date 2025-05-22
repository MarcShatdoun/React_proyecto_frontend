import React from "react";
import Filter from "../components/filter";
import Main from "../components/Main";

const SectionResult = () => {
    return (
        <div className="w-full h-screen bg-gray-300 grid grid-cols-5 grid-rows-5 gap-2">
             <Filter />
             <Main />
        </div>
    )
};

export default SectionResult;