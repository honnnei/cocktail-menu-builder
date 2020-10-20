import React, { useState } from 'react';

type Props = {
  id: string,
  alcoholic: string,
  category: string,
  name: string,
  glass: string,
  image_url: string,
  instructions: string,
  drinkIngredients: string[],
}

const Drink: React.FC<Props> = ({
  id, 
  alcoholic, 
  category, 
  name, 
  glass, 
  image_url, 
  instructions, 
  drinkIngredients
}) => {
  
  return (
    <div className="drink-card">
      <p>{name}</p>
      <img className="drink-image" src={image_url}/>
      <ul>{drinkIngredients.map((ing, ind) => ing ? <li key={ind}>{ing}</li> : null)}</ul>
      <p>{glass}</p>
      <p>{instructions}</p>
    </div>
  );
}

export default Drink;