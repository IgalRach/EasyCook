import React from "react";
import TopRecipes from "./TopRecipes/TopRecipes";
import CategoryList from "./TopRecipes/categoryList";

const q = window.location.search.toString().substring(3);

export default function Search() {
    return (
        <>
            {/* <TopRecipes q={q}/> */}
            <section className="top-catagory-area section-padding-80-0">
                <div className="container">
                    <CategoryList q={q} />
                </div>
            </section>
        </>
    );
}
