import React, { useState } from 'react';
import { getRandomCocktail, Cocktail, DrinkDetails } from '../api/API';


function RandomDrink() {

  const [ searchResults, setSearchResults] = useState<DrinkDetails[]>([]);

console.log(getRandomCocktail());

const handleOnClick = async (e: React.FormEvent<HTMLButtonElement>) => {
  e.preventDefault();
  const cocktail = await getRandomCocktail();
  setSearchResults(cocktail);

}

  return (
    <div className="random">
        <button onClick={handleOnClick}>Get Random Drink</button>
        { searchResults ? searchResults.map((drink, index) => (
          <div>
          <p>{drink.idDrink}</p>
        <p>{drink.drinkIngredients.map(ing => <p>{ing}</p>)}</p>
        </div>
        )) : ""}
    </div>
  );
}

export default RandomDrink;