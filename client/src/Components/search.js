import React from "react";
import TopRecipes from "./TopRecipes/TopRecipes";

const q= window.location.search.toString().substring(3);

export default function Search() {
    return (
        <>
            {/* search section */}
            {/* <div style={{ textAlign: "center"}}>
                <input style={{ border: "none" }} className="navBtn" placeholder="Type any keywords..." />
                <i className="fa fa-search" type="submit" aria-hidden="true" />
            </div> */}
            <TopRecipes q={q}/>
        </>
    );
}
