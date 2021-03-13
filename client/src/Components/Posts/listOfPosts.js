import React from "react";
import Post from './post';


export default function ListOfPosts() {
   
    const [items, setItems] = React.useState([]); 
    
    React.useEffect(()=>{
        fetch('http://localhost:8082/recipes')
        .then((response) => response.json())
        .then((data) => setItems(data));
    
    },[]);

    if (items.length < 1)
    return "";
   
    return (           
            <section className="small-receipe-area section-padding-80-0">
            <div className="container">
                <div className="row">
                    {
                        items.map((data, key) => {
                            return <Post name={data.recipename} img={data.recipePic} category={data.category} numOfComments={data.comments.length} date={data.created} spec={data._id} key={key} />
                        })
                    }
                
                </div>
            </div>
            </section>
        );
}




