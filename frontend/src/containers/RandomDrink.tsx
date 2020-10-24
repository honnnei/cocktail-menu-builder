import React, { useState } from 'react';
import { getRandomCocktail } from '../api/cocktail_api';
import DrinkInfo from '../components/DrinkInfo';
import { DrinkDetails } from '../types/types';


function RandomDrink() {

  const [ searchResults, setSearchResults] = useState<DrinkDetails[]>([]);

  const handleOnClick = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const cocktail = await getRandomCocktail();
    setSearchResults(cocktail);
  }

  return (
    <div className="random">
        <button className="btn btn-outline-info" onClick={handleOnClick}>Get Random Drink</button>
        { searchResults ? searchResults.map((drink) => (
          <DrinkInfo 
          id={drink.id} 
          alcoholic={drink.alcoholic} 
          category={drink.category} 
          name={drink.name} 
          glass={drink.glass} 
          image_url={drink.image_url} 
          instructions={drink.instructions} 
          drinkIngredients={drink.drinkIngredients}
          />
        )) : ""}
    </div>
  );
}

export default RandomDrink;