import React, { useState } from 'react';
import { searchCocktailsByIngredient, Cocktail } from '../api/api';


function Search() {

    const [ ingredient, setIngredient ] = useState<string>('');
    const [ searchResults, setSearchResults] = useState<Cocktail[]>([]);

  const handleOnClick = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const cocktails = await searchCocktailsByIngredient(ingredient);
    setSearchResults(cocktails);

  }
  return (
    <div className="Search">
          <form>
              <input type="text" value={ingredient} onChange={e => setIngredient(e.target.value)} />
              <button onClick={handleOnClick}>Search</button>
          </form>
          { searchResults ? searchResults.map((cocktail, index) => (
              <div key={index}>
                  <p>{cocktail.strDrink}</p>
                  <img src={cocktail.strDrinkThumb} height="100" />
              </div>

          )) : ""}
    </div>
  );
}

export default Search;