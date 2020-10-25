import React, { useState } from 'react';
import { getRandomCocktail } from '../api/cocktail_api';
import DrinkInfo from '../components/DrinkInfo';
import { DrinkDetails } from '../types/types';


function RandomDrink() {

  const [ searchResults, setSearchResults] = useState<DrinkDetails[]>();

  const handleOnClick = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const cocktail = await getRandomCocktail();
    setSearchResults(cocktail);
  }

  return (
    <div className="random-container">
        <button className="btn btn-danger random-button" onClick={handleOnClick}>Get Random Drink</button>
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
        )) : <svg xmlns="http://www.w3.org/2000/svg" height="100" viewBox="0 0 24 24" width="100"><path d="M0 0h24v24H0z" fill="none"/><path d="M21 5V3H3v2l8 9v5H6v2h12v-2h-5v-5l8-9zM7.43 7L5.66 5h12.69l-1.78 2H7.43z"/></svg>}
    </div>
  );
}

export default RandomDrink;