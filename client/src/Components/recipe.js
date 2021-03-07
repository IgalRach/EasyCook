import React from "react";
import NewComment from "./newComment";
import CommentList from "./commentList"



export default function Recipe() {
   
    const [comments, setComments] = React.useState([]);
   
    React.useEffect(() => {
        fetch('http://localhost:8082/recipes')
        .then(response => response.json()).then(
            data => setComments(data)
        )
    },[]) 

    return (
        <>
            <div>
                {/* Receipe Slider */}
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="receipe-slider owl-carousel">
                                <img src="img/bg-img/bg5.jpg" alt="" />
                                <img src="img/bg-img/bg5.jpg" alt="" />
                                <img src="img/bg-img/bg5.jpg" alt="" />
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
                                    <h2>Vegetarian cheese salad</h2>
                                    <div className="receipe-duration">
                                        <h6>Prep: 15 mins</h6>
                                        <h6>Cook: 30 mins</h6>
                                        <h6>Yields: 8 Servings</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="receipe-ratings text-right my-5">
                                    <div className="ratings">
                                        <i className="fa fa-star" aria-hidden="true" />
                                        <i className="fa fa-star" aria-hidden="true" />
                                        <i className="fa fa-star" aria-hidden="true" />
                                        <i className="fa fa-star" aria-hidden="true" />
                                        <i className="fa fa-star-o" aria-hidden="true" />
                                    </div>
                                    <a href="#" className="btn delicious-btn">For Begginers</a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-lg-8">
                                {/* Single Preparation Step */}
                                <div className="single-preparation-step d-flex">
                                    <h4>01.</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                                </div>
                                {/* Single Preparation Step */}
                                <div className="single-preparation-step d-flex">
                                    <h4>02.</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                                </div>
                                {/* Single Preparation Step */}
                                <div className="single-preparation-step d-flex">
                                    <h4>03.</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                                </div>
                                {/* Single Preparation Step */}
                                <div className="single-preparation-step d-flex">
                                    <h4>04.</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                                </div>
                            </div>
                            {/* Ingredients */}
                            <div className="col-12 col-lg-4">
                                <div className="ingredients">
                                    <h4>Ingredients</h4>
                                    {/* Custom Checkbox */}
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                        <label className="custom-control-label" htmlFor="customCheck1">4 Tbsp (57 gr) butter</label>
                                    </div>
                                    {/* Custom Checkbox */}
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                        <label className="custom-control-label" htmlFor="customCheck2">2 large eggs</label>
                                    </div>
                                    {/* Custom Checkbox */}
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck3" />
                                        <label className="custom-control-label" htmlFor="customCheck3">2 yogurt containers granulated sugar</label>
                                    </div>
                                    {/* Custom Checkbox */}
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck4" />
                                        <label className="custom-control-label" htmlFor="customCheck4">1 vanilla or plain yogurt, 170g container</label>
                                    </div>
                                    {/* Custom Checkbox */}
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck5" />
                                        <label className="custom-control-label" htmlFor="customCheck5">2 yogurt containers unbleached white flour</label>
                                    </div>
                                    {/* Custom Checkbox */}
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck6" />
                                        <label className="custom-control-label" htmlFor="customCheck6">1.5 yogurt containers milk</label>
                                    </div>
                                    {/* Custom Checkbox */}
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck7" />
                                        <label className="custom-control-label" htmlFor="customCheck7">1/4 tsp cinnamon</label>
                                    </div>
                                    {/* Custom Checkbox */}
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck8" />
                                        <label className="custom-control-label" htmlFor="customCheck8">1 cup fresh blueberries </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="section-heading text-left">
                                    <h3>Leave a comment</h3>
                                </div>
                            </div>
                        </div>
                        <NewComment comments={comments} setComments={setComments}/>
                        <CommentList  comments={comments}/>
                    </div>
                </div>
            </div>
        </>
    );
}




