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

const DrinkInfo: React.FC<Props> = ({
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
    <div className="">
      <div className="card" style={{width: "18rem"}}>
        <img src={image_url} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{instructions}</p>
        </div>
        <ul className="list-group list-group-flush">
        {drinkIngredients.map((ing, ind) => ing ? <li className="list-group-item" key={ind}>{ing}</li> : null)}
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">Card link</a>
          <a href="#" className="card-link">Another link</a>
            <p>{glass}</p>
        </div>
      </div>
    </div>
  );
}

export default DrinkInfo;