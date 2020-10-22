import React, { useState, useEffect } from 'react';
import { searchCocktailsByIngredient, Cocktail, DrinkDetailsEdited, getMenuData } from '../api/API';
import DrinkCard from '../components/DrinkCard';
import { Menu } from '../components/DrinkInfo';
import Axios from 'axios';
import Nav2 from '../components/Nav2';
import SearchText from '../components/SearchText';


function Search() {

    const [ ingredient, setIngredient ] = useState<string>('');
    const [ searchResults, setSearchResults] = useState<Cocktail[]>([]);

  const handleOnClick = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const cocktails = await searchCocktailsByIngredient(ingredient);
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


  return (
    <div className="Search">
      {/* <SearchText /> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" value={ingredient} onChange={e => setIngredient(e.target.value)} placeholder="Type Ingredient Here" aria-label="Search" />
            <button className="btn btn-danger my-2 my-sm-0" onClick={handleOnClick} type="submit">Search</button>
          </form>
        </div>
      </nav>
      {/* end */}
          <section>
        
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
              <DrinkCard key={index} id={cocktail.idDrink} name={cocktail.strDrink} image_url={cocktail.strDrinkThumb} currentMenus={menus}/>
          )) : ""}
          </div>
    </div>
  );
}

export default Search;