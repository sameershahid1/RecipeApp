import React,{useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';


const App=()=>{
const APP_ID="303d248e";
const APP_KEY="a781447c1aa62ed36238f58c7b5ac11b";


const [recipes,SetRecipe]=useState([]);
const [search,setSearch]=useState("");
const [query,setQuery]=useState("chicken");

const getRecipes=async()=>{
   const response=await fetch(`https:api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`); 
   const data=await response.json();
   SetRecipe(data.hits);
}


useEffect(()=>{
  getRecipes();
},[query]);// eslint-disable-line react-hooks/exhaustive-deps


const updateSearch=e =>
{
  setSearch(e.target.value);
};


const getSearch=e =>
{
   e.preventDefault();
   setQuery(search);
   setSearch("");
}


return (
  <div className='App'>
    <form className='search-form' onSubmit={getSearch} method="post">
      <input className='search-bar' type="text" value={search} onChange={updateSearch}/>
      <button type="submit" className='search-button' name='search'>Search</button>
    </form>
    <div className='Recipes'>
    {
    recipes.map((recipe)=>(
    <Recipe
    key={recipe.recipe.label} 
    title={recipe.recipe.label} 
    calories={recipe.recipe.calories} 
    IMG={recipe.recipe.image}
    ingredients={recipe.recipe.ingredients}
     />)
     )
     }
     </div>
  </div>
);
}

export default App;


