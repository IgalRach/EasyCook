import React from "react";



export default function TopCategoryItem({name}) {
    return (
        <div className="col-12 col-lg-6">
            <div className="single-top-catagory">
                <img src="img/bg-img/bg2.jpg" alt="" />
                {/* Content */}
                <div className="top-cta-content">
                    <h3>{name}</h3>
                    <h6>Simple &amp; Delicios</h6>
                    <a href="receipe-post.html" className="btn delicious-btn">See Full Receipe</a>
                </div>
            </div>
        </div>
        );
}
