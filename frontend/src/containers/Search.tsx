import React, { useState } from 'react';
import { searchCocktailsByIngredient, Cocktail } from '../api/API';
import DrinkCard from '../components/DrinkCard';


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
          <div className="search-results">
          { searchResults ? searchResults.map((cocktail, index) => (
              <DrinkCard key={index} id={cocktail.idDrink} name={cocktail.strDrink} image_url={cocktail.strDrinkThumb}/>
          )) : ""}
          </div>
    </div>
  );
}

export default Search;