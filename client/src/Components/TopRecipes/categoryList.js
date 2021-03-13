import React from "react";
import TopCategoryItem from './topCategoryItem';
 

export default function CategoryList({q}) {

    const [items, setItems] = React.useState([]); 
    

    React.useEffect(()=>{

        let url = 'http://localhost:8082/recipes';
        if(q !== null && q !== '')
            url += '/recipe/'+q;
        fetch(url)
        .then((response) => response.json())
        .then((data) => setItems(data));
    
    },[q]);

    // React.useEffect(()=>{

    //     fetch('http://localhost:8082/recipes/'+q)
    //     .then((response) => response.json())
    //     .then((data) => setItems(data));
    
    // },[q]);

    if (items.length < 1)
        return "";

    return (
        <div className="row">
            {
                items.map((data, key) => {
                    return <TopCategoryItem name={data.recipename} img={data.recipePic} category={data.category} spec={data._id} key={key} />
                })
            }
        </div>
        );
}
