import React from "react";
import TopCategoryItem from './topCategoryItem';
 

export default function CategoryList({q=''}) {

    const [items, setItems] = React.useState([]); //default is empty array
    
    React.useEffect(()=>{

        // let url = 'http://localhost:8082/recipes';
        // if (q !== null && q !== "")
        //     url += '/title/' + q;

        fetch('http://localhost:8082/recipes'+q)
        .then((response) => response.json())
        .then((data) => setItems(data));
    
    },[q]);

    if (items.length < 1)
        return "";

    return (
        <div className="row">
            {
                items.map((data, key) => {
                    return <TopCategoryItem name={data.recipeTitle} key={key} />
                })
            }
        </div>
        );
}
