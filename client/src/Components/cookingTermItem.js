import React from "react";



export default function CookingTermItem({ title, description }) {

    return (
        <>
            {/* <div className="single-widget mb-80">
                <div className="text-center">
                    <span>"</span> 
                    <h4>Nothing is better than going home to family and eating good food and relaxing</h4> 
                    <p>{title}</p>
                    <p>{description}</p>
                    <div className="date-comments d-flex justify-content-between">
                        <div className="date">January 04, 2018</div>
                        <div className="comments">2 Comments</div>
                    </div>
                </div>
            </div> */}
                <div class="item">
                    <div class="pad15">
                        <p class="lead">Multi Item Carousel</p>
                        <p>₹ 1</p>
                        <p>₹ 6000</p>
                        <p>50% off</p>
                    </div>
                </div>

        </>
    );
}
