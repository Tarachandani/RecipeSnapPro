import { useState } from "react";
function RecipesList({ingredientlist}){

    const [ingredients, setIngredients]= useState('');
    const [meals, setMeals] = useState('');

    const GetMealList=async ()=>{
        setIngredients(ingredientlist);
        // ingredients.map((ingredient)=>{
        //     return <div>

        //     </div>
        // })
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`)
        .then(response => response.json())
        .then((data)=>{
            setMeals(data.meals);
        });


    }

    
    // return(
    //     <div>
    //         <button onClick={GetMealList}>hello</button>
    //         {meals}
    //     </div>
        
    // )
}
export default RecipesList;