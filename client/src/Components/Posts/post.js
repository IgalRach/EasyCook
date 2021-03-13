import React from "react";
import { Link } from "react-router-dom";


export default function Post({name, img, category, numOfComments, date, spec}) {

    const specific = "/recipes/"+ spec;

    return (
            <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-small-receipe-area d-flex">
                {/* Receipe Thumb */}
                <div className="receipe-thumb">
                    <img src={img} alt="" style={{width: "80px",  height: "80px"}}/>
                </div>
                {/* Receipe Content */}
                <div className="receipe-content">
                    <span>{category}</span> 
                    {/* {date} */}
                    <Link to={specific}>
                    <h5>{name}</h5>
                    </Link>
                    <div className="ratings">
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star-o" aria-hidden="true" />
                    </div>
                    <p> {numOfComments} Comments</p>
                </div>
                </div>
            </div>
        );
}
