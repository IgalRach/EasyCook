import React from "react";
import CookingTermItem from "../cookingTermItem";
import ScriptTag from 'react-script-tag';


export default function CookingPage() {

    const [termsDetails, settermsDetails] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:8082/cookingTerms/')
            .then(response => response.json())
            .then(data => settermsDetails(data)
            )
    }, [])

    if (termsDetails.length < 1)
        return "";

    return (
        <div className="row">
            <div class="MultiCarousel" data-items="1,3,5,6" data-slide="1" id="MultiCarousel" data-interval="1000">
                <div class="MultiCarousel-inner"></div>
                {
                    termsDetails.map((data, key) => {
                        return <CookingTermItem key={key} title={data.title} img={data.recipePic} description={data.description} />
                    })
                }
            </div>
            <button className="btn btn-primary leftLst">&lt;</button>
             <button className="btn btn-primary rightLst">&gt;</button>
             {/* <ScriptTag type="text/javascript" src=".../js/bootstrap/bootstrap.min.js" /> */}
        </div>
    );
}
