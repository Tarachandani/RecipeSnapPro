import { useState } from "react";
import AllRecipeCards from "./AllRecipeCards";
import { useEffect } from "react";
function RecipesList({ingredientlist}){

    useEffect(()=>{
        GetMealList();
    },[]);
    
    //console.log(ingredientlist);
    const [ingredients, setIngredients]= useState('');
    const [meals, setMeals] = useState('');

    const GetMealList=async ()=>{
        

        ingredientlist.map((ingredient, index)=>{
            console.log(ingredient);
            
            fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredientlist[index].props.children}`)
            .then(response => response.json())
            .then((data)=>{
                // (meal)=>{
                //     return <AllRecipeCards meal={meal.length}></AllRecipeCards>
                // }
                if(data.meals===null){

                }else{
                    console.log(data.meals);
                    const newone= data.meals.map((meal)=>{
                        //console.log(meal.strMeal);
                        return <AllRecipeCards mealName={meal.strMeal} mealImage={meal.strMealThumb} link={meal.strMealThumb} id={meal.idMeal}></AllRecipeCards>
                    });
                    //console.log(newone);
                    setMeals(newone);
                }
                
            })
            
            
            
        })
        
       


    }

    return(
        <div>
            {meals}
        </div>
        
     )
}
export default RecipesList;