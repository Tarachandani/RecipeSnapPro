import { useState } from "react";
import AllRecipeCards from "./AllRecipeCards";
import { useEffect } from "react";
import './styles.css';

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
        const divStyle = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '10vh',
            marginTop: '20px',
            color: 'red',     
            fontWeight: 'bold', 
            fontSize: '24px',
          };
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
                var newone='';
                if(data.meals===null){
                    newone=<div style={divStyle}>There are no results for the given ingredients!!</div>
                }else{
                    console.log(data.meals);
                    newone= data.meals.map((meal)=>{
                        //console.log(meal.strMeal);
                        return <AllRecipeCards mealName={meal.strMeal} mealImage={meal.strMealThumb} link={meal.strMealThumb} id={meal.idMeal}></AllRecipeCards>
                    });
                    //console.log("KJEFKLJSKLFJLSK:DJFKLSDJFDS");
                    //setMeals([...meals, ...newone])
                    //console.log(meals);
                }
                setMeals(newone);

                
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