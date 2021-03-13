// import React from "react";
// import TopCategoryItem from './topCategoryItem';
 

// export default function CategoryList() {

//     const [items, setItems] = React.useState([]); //default is empty array
    
//     React.useEffect(()=>{
//         fetch('http://localhost:8082/accounts')
//         .then((response) => response.json())
//         .then((data) => setItems(data));
    
//     },[]);

//     if (items.length < 1)
//         return "";

//     return (
//         <div className="row">
//             {
//                 items.map((data, key) => {
//                     return <TopCategoryItem name={data.userName} key={key} />
//                 })
//             }
//         </div>
//         );
// }
