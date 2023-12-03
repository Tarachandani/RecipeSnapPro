import './styles.css';
import { useState, useEffect } from "react";

function AllRecipeCards({ mealName, mealImage, id }) {
    const [instructions, setInstructions] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        runRecipe(id);
    }, [id]);

    const runRecipe = async (id) => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(response => response.json())
            .then((data) => {
                setInstructions(data.meals[0].strInstructions);
            });
    }

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    return <div className = "container">

        <h2>{mealName}</h2>
        <img src={mealImage} alt={mealName} />
        <button className= "button-86" onClick={toggleModal}>See Recipe</button>

        <dialog open={isModalOpen}>
            <button onClick={toggleModal}>&times;</button>
            <h2>Instructions</h2>
            <p>{instructions}</p>
        </dialog>
    </div>
}

export default AllRecipeCards;
