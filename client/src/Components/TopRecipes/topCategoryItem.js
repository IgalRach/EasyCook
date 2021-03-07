import React from "react";
import { Link } from "react-router-dom";



export default function TopCategoryItem({name}) {
    return (
        <div className="col-12 col-lg-6">
            <div className="single-top-catagory">
                <img src="img/bg-img/bg2.jpg" alt="" />
                {/* Content */}
                <div className="top-cta-content">
                    <h3>{name}</h3>
                    <h6>Simple &amp; Delicios</h6>
                    <Link to="/recipes/recipe" className="btn delicious-btn">See Full Receipe</Link>
                </div>
            </div>
        </div>
        );
}
