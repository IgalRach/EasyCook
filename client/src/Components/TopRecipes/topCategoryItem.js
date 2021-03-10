import React from "react";
import { Link } from "react-router-dom";



export default function TopCategoryItem({name,img,category}) {
    return (
        <div className="col-12 col-lg-6">
            <div className="single-top-catagory">
                <img src={img} alt="" style={{width: "540px",  height: "270px"}} />
                {/* Content */}
                {/* "img/bg-img/bg2.jpg" */}
                <div className="top-cta-content">
                    <h3>{name}</h3>
                    <h6>{category}</h6>
                    <Link to="/recipes/recipe" className="btn delicious-btn">See Full Receipe</Link>
                </div>
            </div>
        </div>
        );
}
