import React from "react";
import ListRecipesByCategory from "./Posts/listRecipesByCategory";


export default function RecipesByCategory() {

    const [recipes, setRecipes] = React.useState([]);

    React.useEffect(() => {

        let url = '';
        const arr = window.location.toString().split('/');
        for (let i = 2; i < arr.length; i++) {
            if (arr[i] !== 'localhost:3000')
                url += arr[i] + '/';
        }
        // console.log(url);

        fetch('http://localhost:8082/' + url)
            .then(response => response.json()).then(
                data => setRecipes(data)
            )
    }, [])

    return (
        <>
            {recipes.map((data, key) => {
                // console.log(data);
                // console.log(data.recipes);
                // console.log(data.recipes[key]);
                return <ListRecipesByCategory key={key} list={data.recipes} />
            })}
        </>
    );
}

