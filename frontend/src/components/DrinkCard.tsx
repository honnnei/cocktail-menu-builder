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
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown button
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" onClick={e => console.log(1)}>Action</a>
                    <a className="dropdown-item" onClick={e => console.log(2)}>Another action</a>
                    <a className="dropdown-item" onClick={e => console.log(3)}>Something else here</a>
                </div>
            </div>
            <a href="#" className="card-link">Card link</a>
            <Link to={`/cocktails/${id}`} className="card-link">See the Ingredients</Link>
            </div>
        </div>
    )
}

export default DrinkCard;
