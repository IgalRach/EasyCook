import React from "react";
import NewComment from "./newComment"
import { Link } from "react-router-dom";
import ScriptTag from 'react-script-tag';


export default function Recipe() {

    const [recipesDetails, setRecipesDetails] = React.useState(null);
    const [comments, setComments] = React.useState(null);

    const index = window.location.toString().lastIndexOf('/') + 1;
    const id = window.location.toString().substring(index);

    React.useEffect(() => {
        // const index = window.location.toString().lastIndexOf('/') + 1;
        // const id = window.location.toString().substring(index);


        fetch('http://localhost:8082/comments/' + id)
            .then(response => response.json())
            .then(data => setComments(data)
            )
    }, [])

    React.useEffect(() => {
        const index = window.location.toString().lastIndexOf('/') + 1;
        const id = window.location.toString().substring(index);


        fetch('http://localhost:8082/recipes/' + id)
            .then(response => response.json())
            .then(data => setRecipesDetails(data)
            )
    }, [])

    if (recipesDetails === null)
        return "";

    return (
        <>
            <div>
                {/* Receipe Slider */}
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="receipe-slider owl-carousel" style={{ display: "block" }}>
                                <img src={recipesDetails.recipePic} alt="" style={{width: "1110px"}} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Receipe Content Area */}
                <div className="receipe-content-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-8">
                                <div className="receipe-headline my-5">
                                    <span>April 05, 2018</span>
                                    <h2>{recipesDetails.recipename}</h2>
                                    <div className="receipe-duration">
                                        <h6>Prepertion Time: Up To {recipesDetails.propTime}</h6>
                                
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="receipe-ratings text-right my-5">
                                    <Link to="/categories" className="btn delicious-btn">For more recipes in {recipesDetails.category}</Link>
                                </div>
                            </div>
                        </div>
                        <div id="disabledBox1" style={{display: "none"}}> {recipesDetails.description}</div>
                        <div className="row">
                            <div className="col-12 col-lg-8 splitted">

                            </div>
                            {/* Ingredients */}
                            <div className="col-12 col-lg-4">
                                <div className="ingredients dynamic">
                                    <h4>Ingredients</h4>
                                    <div id="disabledBox2" style={{display: "none"}}> {recipesDetails.ingredients}</div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12" >
                                <div className="section-heading text-left" style={{marginBottom: "40px"}}>
                                    <h3>Leave a comment</h3>
                                </div>
                            </div>
                        </div>
                        <NewComment comments={comments} setComments={setComments} />
                    </div>
                </div>
                <ScriptTag type="text/javascript" src="../js/ingredients.js" />
            </div>
        </>
    );
}




