import React, { useState, useEffect } from 'react';
import { DrinkDetails } from '../types/types';
import DrinkInfo from '../components/DrinkInfo';
import { getCocktailById } from '../api/cocktail_api';


const DrinkInfoPage: React.FunctionComponent<any> = (props) => {
  const [ searchResults, setSearchResults] = useState<DrinkDetails[]>([]);

  const getCocktailData = async () => {
    const cocktails = await getCocktailById(props.match.params.drinkId);
    setSearchResults(cocktails);
  }

  useEffect(() => {
    getCocktailData();
  }, []);


  return (
    <div className="container-fluid">
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

export default DrinkInfoPage;