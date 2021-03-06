import React, { useState, useEffect } from 'react';
import { searchCocktailsByIngredient, filterByGlass, searchCocktailByName } from '../api/cocktail_api';
import { getMenus } from '../api/menu_api';
import { Cocktail, Menu, Alert } from '../types/types';
import DrinkCard from '../components/DrinkCard';
import Axios from 'axios';


function Search() {

    const [ input, setInput ] = useState<string>('');
    const [ searchResults, setSearchResults] = useState<Cocktail[]>();
    const [ errorAlertVisible, setErrorAlertVisible ] = useState<Alert>({display: "none", message: ""});
    
  const getCocktailsByApiCall = async (apiCall: (arg: string) => any, argument: string) => {
      const cocktails = await apiCall(argument);
      if (typeof(cocktails) === 'string') {
        setErrorAlertVisible({display: "flex", message: cocktails});
      } else {
        setErrorAlertVisible({display: "none", message: ''});
        setSearchResults(cocktails);

      }
    }
      

  const [ menus, setMenus ] = useState<Menu[]>([]);

  const callGetMenus = async() => {
    const menus = await getMenus();
    setMenus(menus);
  }

  // const addToMenu = (menuname) => {

  // }
  
  useEffect(() => {
    callGetMenus();
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
            <input className="form-control mr-sm-2" type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="Name or Ingredient" aria-label="Search" />
            <button className="btn btn-danger my-2 my-sm-0" onClick={e => getCocktailsByApiCall(searchCocktailsByIngredient, input)} type="submit">By Ingriedient</button>
            <button className="btn btn-danger my-2 my-sm-0" onClick={e => getCocktailsByApiCall(searchCocktailByName, input)} type="submit">By Name</button>
          </div>
        </div>
      </nav>
      {/* end */}
          <section>
        
        <div className="collapse" id="cocktailsBySpirits">
          <div className="card card-body bg-light">
          <ul className="nav">
            {spiritsArray.map((spirit, index) => (
              <li className="nav-item col-2" key={index}>
              <a className="nav-link btn btn-outline-dark" onClick={e => getCocktailsByApiCall(searchCocktailsByIngredient, spirit)}>{capitalizeString(spirit)}</a>
          </li>
            ))}
                
            </ul>
          </div>
        </div>
        <div className="collapse" id="cocktailsByGlasses">
          <div className="card card-body">
          <ul className="nav">
            {glassArray.map((glass, index) => (
              <li className="nav-item col-2" key={index}>
                  <a className="nav-link btn btn-outline-dark" onClick={e => getCocktailsByApiCall(filterByGlass, glass)}>{capitalizeString(glass === "Old-fashioned glass" ? "Old-fashioned" : glass)}</a>
              </li>
            ))}
          </ul>
          </div>
        </div>
          </section>
          <div style={{display: errorAlertVisible.display}} className="alert alert-danger" role="alert">{errorAlertVisible.message}</div>
          <div className="search-results">
          { searchResults ? searchResults.map((cocktail, index) => (
              <DrinkCard key={index} id={cocktail.id} name={cocktail.name} image_url={cocktail.image_url} currentMenus={menus}/>
          )) 
          : 
          <svg xmlns="http://www.w3.org/2000/svg" height="100" viewBox="0 0 24 24" width="100"><path d="M0 0h24v24H0z" fill="none"/><path d="M21 5V3H3v2l8 9v5H6v2h12v-2h-5v-5l8-9zM7.43 7L5.66 5h12.69l-1.78 2H7.43z"/></svg>
          }
          </div>
    </div>
  );
}

export default Search;