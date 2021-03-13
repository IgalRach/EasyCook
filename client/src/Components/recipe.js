import React from "react";
import NewComment from "./newComment"
import { useHistory } from "react-router-dom";
import ScriptTag from 'react-script-tag';


export default function Recipe({ catId }) {

    const [recipesDetails, setRecipesDetails] = React.useState(null);
    const [comments, setComments] = React.useState(null);
    let para;

    const history = useHistory();

    const recipesByCat = (e) => {
       // history.push('/category/'+ e.target.value);
    }


    // if (!catId) {
        const index = window.location.toString().lastIndexOf('/') + 1;
        const id = window.location.toString().substring(index);
    //     para = id;
    // } else {
    //     para = catId;
    // }

    React.useEffect(() => {
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
                                <img src={recipesDetails.recipePic} alt="" style={{ width: "1110px" }} />
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
                                    <span>{recipesDetails.created}</span>
                                    <h2>{recipesDetails.recipename}</h2>
                                    <div className="receipe-duration">
                                        <h6>Prepertion Time: Up To {recipesDetails.propTime} min</h6>

                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="receipe-ratings text-right my-5">
                                    {/* <Link to='/categories/' params={{ cat: recipesDetails.category }} className="btn delicious-btn">For more recipes in {recipesDetails.category}</Link> */}
                                    <input className="btn delicious-btn" value={recipesDetails.category} onClick={recipesByCat} readOnly />
                                </div>
                            </div>
                        </div>
                        <div id="disabledBox1" style={{ display: "none" }}> {recipesDetails.description}</div>
                        <div className="row">
                            <div className="col-12 col-lg-8 splitted">

                            </div>
                            {/* Ingredients */}
                            <div className="col-12 col-lg-4">
                                <div className="ingredients dynamic">
                                    <h4>Ingredients</h4>
                                    <div id="disabledBox2" style={{ display: "none" }}> {recipesDetails.ingredients}</div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12" >
                                <div className="section-heading text-left" style={{ marginBottom: "40px" }}>
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




