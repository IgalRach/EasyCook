import React from "react";



export default function CookingTermItem({ title, description }) {

    return (
        <>
            <div className="item">
                <div className="pad15">
                    <p className="lead" style={{fontWeight: "600"}}>{title}</p>
                    <p>{description}</p>
                </div>
            </div>

        </>
    );
}
