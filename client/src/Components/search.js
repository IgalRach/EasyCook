import React from "react";
import TopRecipes from "./TopRecipes/TopRecipes";

const q= window.location.search.toString().substring(3);

export default function Search() {
    return (
        <>
            <TopRecipes q={q}/>
        </>
    );
}
