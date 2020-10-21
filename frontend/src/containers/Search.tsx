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
          <section>
          <ul className="nav">
                <li className="nav-item col-6">
                <div className="form-group">
                  <div className="form-row">
                    <div className="col">
                      <input type="text" className="form-control" value={ingredient} onChange={e => setIngredient(e.target.value)} id="ingredientSearch" placeholder="Type Ingredient Here, e.g. gin" />
                    </div>
                    <div className="col">
                      <button className="btn btn-dark" onClick={handleOnClick}>Search By Ingredient</button>
                    </div>
                  </div>
                </div>
                </li>
                <li className="nav-item col-3">
                <a className="btn btn-dark dropdown-toggle" data-toggle="collapse" href="#cocktailsBySpirits" role="button" aria-expanded="false" aria-controls="collapseExample">
                  Search by Popular Spirits
                </a>
                </li>
                <li className="nav-item col-3">
                <a className="btn btn-dark dropdown-toggle" data-toggle="collapse" href="#cocktailsByGlasses" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Search by the Type of Glass
                </a>
                </li>
        </ul>
        <div className="collapse" id="cocktailsBySpirits">
          <div className="card card-body bg-light">
          <ul className="nav">
                <li className="nav-item col-2">
                    <a className="nav-link btn btn-outline-dark">Vodka Cocktails</a>
                </li>
                <li className="nav-item col-2">
                    <a className="nav-link btn btn-outline-dark">Gin Cocktails</a>
                </li>
                <li className="nav-item col-2">
                    <a className="nav-link btn btn-outline-dark">Light Rum Cocktails</a>
                </li>
                <li className="nav-item col-2">
                  <a className="nav-link btn btn-outline-dark">Dark Rum Cocktails</a>
                </li>
                <li className="nav-item col-2">
                    <address className="nav-link btn btn-outline-dark">Bourbon Cocktails</address>
                </li>
                <li className="nav-item col-2">
                    <a className="nav-link btn btn-outline-dark">Kahlua Cocktails</a>
                </li>
            </ul>
          </div>
        </div>
        <div className="collapse" id="cocktailsByGlasses">
          <div className="card card-body">
          <ul className="nav">
                <li className="nav-item col-2">
                    <a className="nav-link btn btn-outline-dark">Highball Glass</a> 
                    {/* //Highball glass */}
                </li>
                <li className="nav-item col-2">
                    <a className="nav-link btn btn-outline-dark">Cocktail Glass</a>
                    {/* Cocktail glass */}
                </li>
                <li className="nav-item col-2">
                    <a className="nav-link btn btn-outline-dark">Old-fashioned Glass</a>
                    {/* Old-fashioned glass */}
                </li>
                <li className="nav-item col-2">
                  <a className="nav-link btn btn-outline-dark">Collins Glass</a>
                  {/* Collins glass */}
                </li>
                <li className="nav-item col-2">
                    <a className="nav-link btn btn-outline-dark">Champagne Flute</a>
                    {/* Champagne flute */}
                </li>
                <li className="nav-item col-2">
                    <a className="nav-link btn btn-outline-dark">Martini Glass</a>
                    {/* Martini Glass */}
                </li>
            </ul>
          </div>
        </div>
          </section>
             
          <div className="search-results">
          { searchResults ? searchResults.map((cocktail, index) => (
              <DrinkCard key={index} id={cocktail.idDrink} name={cocktail.strDrink} image_url={cocktail.strDrinkThumb}/>
          )) : ""}
          </div>
    </div>
  );
}

export default Search;