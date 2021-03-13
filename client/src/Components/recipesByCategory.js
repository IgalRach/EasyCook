import React from "react";
import ListRecipesByCategory from "./Posts/listRecipesByCategory";
import Post from "./Posts/post";


export default function RecipesByCategory() {

    const [items, setItems] = React.useState([]);
    const index = window.location.toString().lastIndexOf('/') + 1;
    const catName = window.location.toString().substring(index);
    console.log('catName', catName);

    React.useEffect(() => {

        fetch('http://localhost:8082/recipes')
            .then((response) => response.json())
            .then((data) => data.forEach(element => {
                // console.log(element.category)
                if( element.category === 0){
                    setItems(data);
                }
            })
            );

        // fetch('http://localhost:8082/category/'+ catName)
        // .then((response) => response.json())
        // .then((data) => setItems(data));

    }, []);

    console.log('items333', items);
    // console.log('items', items["recipes"]);
    // if (items.length < 1)
    // return "";

    return (
        <>
            {/* <div>Hello</div> */}
            {
                items.map((data, key) => {
                    return <Post name={data.recipename} img={data.recipePic} category={data.category} numOfComments={data.comments.length} date={data.created} spec={data._id} key={key} />
                })
            }

        </>
    );
}

