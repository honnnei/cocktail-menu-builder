import React from 'react';
import { Link } from 'react-router-dom';

    type Props = {
        id: string;
        name: string;
        image_url: string;
    }
    
    const DrinkCard: React.FC<Props> = ({
    id, 
    name,  
    image_url
    }) => {
    
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={image_url} className="card-img-top" alt={name} />
            <div className="card-body">
            <h5 className="card-title">{name}</h5>
            </div>
            <div className="card-body">
            <a href="#" className="card-link">Card link</a>
            <Link to={`/cocktails/${id}`} className="card-link">See the Ingredients</Link>
            </div>
        </div>
    )
}

export default DrinkCard;
