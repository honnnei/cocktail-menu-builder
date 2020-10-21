import React, {useState} from 'react';
import { Menu } from './DrinkInfo';

const MenuCard: React.FC<Menu> = ({
    menuname, 
    drinks
  }) => {

    const [ comments, setComments ] = useState<string[]>([]);
    const [ commentInput, setCommentInput ] = useState<string>('');

    const createComment = () => {
        let array = [...comments, commentInput];
        setComments(array);
    }

    return (
        <div className="card text-center">
        <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
                <a className="nav-link active" href="#">Active</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
            </li>
            </ul>
        </div>
        <div className="card-body">
            <h5 className="card-title">{menuname}</h5>
            {drinks.map((drink: any) => <p>{drink.name}</p>)}
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
            <input 
            type="text"
            value={commentInput}
            onChange={e => setCommentInput(e.target.value)}
            />
            <button onClick={createComment}>Create Comment</button>
        {comments ? comments.map((comment) => (
            <p>{comment}</p>
        )) : ""}
        </div>
    )
}

export default MenuCard;
