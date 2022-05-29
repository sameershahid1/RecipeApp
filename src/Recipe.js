import React from "react";
import style from "./recipe.module.css"

const Recipe=({title,calories,IMG,ingredients})=>
{
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
              {ingredients.map(ingredients=>(<li>{ingredients.text}</li>))}  
            </ol>
            <p>{calories}</p>
            <img className={style.image} src={IMG} alt="FUCK YOU" />
        </div>
    );
};


export default Recipe;


