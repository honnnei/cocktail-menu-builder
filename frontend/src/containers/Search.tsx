import React, { useState, useEffect } from 'react';
import { searchCocktailsByIngredient, Cocktail, DrinkDetailsEdited, getMenuData, filterByGlass } from '../api/cocktail_api';
import DrinkCard from '../components/DrinkCard';
import { Menu } from '../components/DrinkInfo';
import Axios from 'axios';
import Nav2 from '../components/Nav2';
import SearchText from '../components/SearchText';


function Search() {

    const [ ingredient, setIngredient ] = useState<string>('');
    const [ searchResults, setSearchResults] = useState<Cocktail[]>();

  // const handleOnClick = async (e: React.FormEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   const cocktails = await searchCocktailsByIngredient(ingredient);
  //   setSearchResults(cocktails);

  // }

  const getCocktailsByApiCall = async (apiCall: (arg: string) => any, argument: string) => {
    const cocktails = await apiCall(argument);
    setSearchResults(cocktails);
  } 

  const [ menus, setMenus ] = useState<Menu[]>([]);

  const getMenus = async() => {
    const menus = await getMenuData();
    setMenus(menus);
  }

  // const addToMenu = (menuname) => {

  // }
  
  useEffect(() => {
    getMenus();
    // return () => {
    //   cleanup?
    // };
  }, []);

  const glassArray: string[] = [
    "Highball glass",
    "Cocktail glass",
    "Old-fashioned glass",
    "Collins glass",
    "Champagne flute",
    "White wine glass"
  ];

  const spiritsArray: string[] = [
    "vodka",
    "gin",
    "light rum",
    "campari",
    "bourbon",
    "kahlua"
  ];

  const capitalizeString = (string: string) => {
    return string.split(" ").map((word) => word[0].toUpperCase() + word.slice(1, word.length)).join(" ");
  }

 

  return (
    <div className="Search">
      {/* <SearchText /> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Search By</a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
            <a className="btn btn-light dropdown-toggle" data-toggle="collapse" href="#cocktailsBySpirits" role="button" aria-expanded="false" aria-controls="collapseExample">
                  Popular Spirits
                </a>
            </li>
            <li className="nav-item">
            <a className="btn btn-light dropdown-toggle" data-toggle="collapse" href="#cocktailsByGlasses" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Type of Glass
                </a>
            </li>
          </ul>
          <div className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" value={ingredient} onChange={e => setIngredient(e.target.value)} placeholder="Type Ingredient Here" aria-label="Search" />
            <button className="btn btn-danger my-2 my-sm-0" onClick={e => getCocktailsByApiCall(searchCocktailsByIngredient, ingredient)} type="submit">Search</button>
          </div>
        </div>
      </nav>
      {/* end */}
          <section>
        
        <div className="collapse" id="cocktailsBySpirits">
          <div className="card card-body bg-light">
          <ul className="nav">
            {spiritsArray.map((spirit) => (
              <li className="nav-item col-2">
              <a className="nav-link btn btn-outline-dark" onClick={e => getCocktailsByApiCall(searchCocktailsByIngredient, spirit)}>{capitalizeString(spirit)}</a>
          </li>
            ))}
                
            </ul>
          </div>
        </div>
        <div className="collapse" id="cocktailsByGlasses">
          <div className="card card-body">
          <ul className="nav">
          {glassArray.map((glass) => (
      <li className="nav-item col-2">
          <a className="nav-link btn btn-outline-dark" onClick={e => getCocktailsByApiCall(filterByGlass, glass)}>{capitalizeString(glass === "Old-fashioned glass" ? "Old-fashioned" : glass)}</a>
      </li>
    ))}
            
  
            </ul>
          </div>
        </div>
          </section>
             
          <div className="search-results">
          { searchResults ? searchResults.map((cocktail, index) => (
              <DrinkCard key={index} id={cocktail.idDrink} name={cocktail.strDrink} image_url={cocktail.strDrinkThumb} currentMenus={menus}/>
          )) 
          : 
          <svg xmlns="http://www.w3.org/2000/svg" height="100" viewBox="0 0 24 24" width="100"><path d="M0 0h24v24H0z" fill="none"/><path d="M21 5V3H3v2l8 9v5H6v2h12v-2h-5v-5l8-9zM7.43 7L5.66 5h12.69l-1.78 2H7.43z"/></svg>
          }
          </div>
    </div>
  );
}

export default Search;