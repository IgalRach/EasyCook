import React from "react";
import { Link } from "react-router-dom";

export default function CategoryLabel({ name, img }) {

    return (
        <>
            <div className="breadcumb-area bg-img bg-overlay" style={{ backgroundImage: `url(${img})`, marginBottom: "2%", marginTop: "2%" }}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="breadcumb-text text-center">
                            <Link to={`/category/${name}`} ><input value={name} readOnly style={{ backgroundColor: "transparent",border: "none",color: "white",fontSize: "2.0rem", textAlign: "center", fontWeight: "700"}} /></Link>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

