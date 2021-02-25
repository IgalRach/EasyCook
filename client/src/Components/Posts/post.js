import React from "react";



export default function Post() {
    return (
            <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-small-receipe-area d-flex">
                {/* Receipe Thumb */}
                <div className="receipe-thumb">
                    <img src="img/bg-img/sr1.jpg" alt="" />
                </div>
                {/* Receipe Content */}
                <div className="receipe-content">
                    <span>January 04, 2018</span>
                    <a href="receipe-post.html">
                    <h5>Homemade italian pasta</h5>
                    </a>
                    <div className="ratings">
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star-o" aria-hidden="true" />
                    </div>
                    <p>2 Comments</p>
                </div>
                </div>
        </div>
        );
}
