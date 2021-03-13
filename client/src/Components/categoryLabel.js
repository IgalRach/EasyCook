import React from "react";
import { useHistory } from "react-router-dom";

export default function CategoryLabel({ name, img }) {

    const history = useHistory();

    const showRecipesPerCategory = (e) => {
        history.push('/categories/category/' + e.target.value);
    }

    return (
        <>
            <div className="breadcumb-area bg-img bg-overlay" style={{ backgroundImage: `url(${img})`, marginBottom: "2%", marginTop: "2%" }}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="breadcumb-text text-center">
                                <input value={name} onClick={showRecipesPerCategory} readOnly style={{ backgroundColor: "transparent",border: "none",color: "white",fontSize: "2.0rem", textAlign: "center", fontWeight: "700"}} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

