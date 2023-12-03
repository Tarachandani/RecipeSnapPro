import { useState } from "react";
import { useEffect } from "react";
function AllRecipeCards({mealName, mealImage, link, id}){
    const [instructions, setInstructions] = useState('');

    useEffect(()=>{
        runRecipe(id);
    },[])

    const runRecipe= async (id)=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(response => response.json())
        .then((data) => {
            console.log(data.meals);
            setInstructions(data.meals[0].strInstructions);
        });
    }


    return <div>
        <h2>{mealName}</h2>
        <img src={mealImage}></img>
        {instructions}
    </div>

}
export default AllRecipeCards;

//52824