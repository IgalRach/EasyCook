import React from "react";
import CategoryList from './categoryList';


export default function TopRecipes({q}) {
    return (
        <section className="top-catagory-area section-padding-80-0">
            <div className="container">
            <CategoryList q={q}/>
            </div>
        </section>
        );
}




