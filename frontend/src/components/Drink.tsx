import React, { useState } from 'react';
import { Cocktail as CocktailType } from '../api/api';


function Drink() {

    const [ ingredient, setIngredient ] = useState<string>('');
    const [ searchResults, setSearchResults] = useState<Cocktail[]>([]);

  const handleOnClick = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const cocktails = await searchCocktailsByIngredient(ingredient);
    setSearchResults(cocktails);

  }
  return (
    <div className="Search">
              <div key={index}>
                  <p>{cocktail.strDrink}</p>
                  <img src={cocktail.strDrinkThumb} height="100" />
              </div>
    </div>
  );
}

export default Drink;