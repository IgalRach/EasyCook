import React from "react";


export default function ListOfCategories() {
   
    const [items, setItems] = React.useState(null); 
    
    React.useEffect(()=>{
        const index = window.location.toString().lastIndexOf('/') + 1;
        const catName = window.location.toString().substring(index);
        console.log('catName', cat);
        fetch('http://localhost:8082/category/'+ category)
        .then((response) => response.json())
        .then((data) => setItems(data));
    
    },[]);

    if (items.length < 1)
    return "";
   
    return (           
            <section className="small-receipe-area section-padding-80-0">
            <div className="container">
                <div className="row">
                    <div>{items}</div>
                    <div>Hello from list of categories!</div>
                    {/* {
                        items.map((data, key) => {
                            return <Post name={data.recipename} numOfComments={data.comments.length} date={data.created} spec={data._id} key={key} />
                        })
                    } */}
                
                </div>
            </div>
            </section>
        );
}




