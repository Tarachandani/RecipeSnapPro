import React from 'react';
import FileAdder from "./FileAdder";
import FoodImage from './images/imageoffood.jpeg';

function AIRecipeApp() {
    return (
        <div style={{ backgroundColor: 'powderblue' }}>
            <h1>AI Recipe App</h1>
            <img src={FoodImage} alt="food on table" />
            <br />
            <span>Please lay out your ingredients (like shown above):</span>
            <FileAdder />
        </div>
    );
}

export default AIRecipeApp;