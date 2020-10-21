import React, { useState, useEffect } from 'react';
import { getRandomCocktail, Cocktail, DrinkDetails, DrinkDetailsEdited } from '../api/API';
import DrinkInfo from '../components/DrinkInfo';
import { RouteComponentProps } from "react-router-dom";
import { getCocktailById } from '../api/API';


const DrinkInfoPage: React.FunctionComponent<any> = (props) => {
  // const yourStateProp = props.match.params.drinkId;
  // console.log(yourStateProp);
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
        { searchResults ? searchResults.map((drink, index) => (
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