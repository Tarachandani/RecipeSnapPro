import { useState } from "react";
import AllRecipeCards from "./AllRecipeCards";
import { useEffect } from "react";
function RecipesList({ingredientlist}){

    
    
    //console.log(ingredientlist);
    //const [ingredientlistState, setIngredients]= useState('');
    const [meals, setMeals] = useState([]);

    useEffect(()=>{
        setMeals('');
        // console.log("SET THE THING")
        // console.log(meals);
        GetMealList();
    },[ingredientlist]);

    const GetMealList=async ()=>{
        console.log("TOP OF FUNCTION")
        console.log(meals);

        console.log(ingredientlist);
        //console.log("DJFKLSDJFLSJD")
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
                    //console.log("KJEFKLJSKLFJLSK:DJFKLSDJFDS");
                    //setMeals([...meals, ...newone])
                    setMeals(newone);
                    //console.log(meals);
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