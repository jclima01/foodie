import React, { useEffect, useState } from 'react'
import RecipeCard from '../RecipeCard/RecipeCard'

const GridCards = () => {
    const [recipes, setRecipes] = useState([])
    
    useEffect(()=>{

    },[])
  return (
    <div>
        {recipes.map(recipe => <RecipeCard key={recipe}/>)}
    </div>
  )
}

export default GridCards