import React from "react";
import Recipe from "../recipe"


export default function RecipesByCategory({ list }) {


    //const data = list.match(/.{1,25}/g);

    return (
        <>
            {/* {list.map((data, key) => { */}
                <section className="small-receipe-area section-padding-80-0">
                    <div className="container">
                        <div className="row">
                            {/* {
                                <Recipe catId={data} key={key} />
                            } */}
                            {list}
                            {/* {data} */}
                        </div>
                    </div>
                </section>
            {/* })} */}
        </>
    );
}

