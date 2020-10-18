import React, { useState } from 'react';

type Props = {
  id: string,
  description: string,
  image_url: string
}

const Drink: React.FC<Props> = ({
  id, 
  description, 
  image_url
}) => {

  return (
    <div className="drink-card">
      <p>{description}</p>
      <img className="drink-image" src={image_url}/>
    </div>
  );
}

export default Drink;