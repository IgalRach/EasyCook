import React from "react";
import TopCategoryItem from './topCategoryItem';
 

export default function CategoryList() {

    const [items, setItems] = React.useState([]); //default is empty array
    
    fetch('http://localhost:8081/movies')
        .then((response) => response.json())
        .then((data) => setItems(data));
    
    if (items.length < 1)
        return "";

    return (
        <div className="row">
            {
                items.map((data, key) => {
                    return <TopCategoryItem name={data.title} key={key} />
                })
            }
        </div>
        );
}
