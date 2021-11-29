import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';
import imgNotFound from '../../assets/not-found.png';

const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appareance,
    characters,
    img
}) => {
    return (
            <div className="_hero-card">
                <img 
                    src={img ? img : imgNotFound}
                    className="_imagen-heroe"
                    alt={superhero}
                />
                <div className="_hero-card-info">
                    <h5 className="card-title">{ superhero }</h5>
                    <p className="card-text"> { alter_ego } </p>
                    { (alter_ego !== characters) && <p className="text-muted"> {characters} </p> }
                    <p className="card-text">
                        <small className="text-muted">{first_appareance}</small>
                    </p>
                    <Link to={`/heroe/${id}`}>
                        Mas....
                    </Link>
                </div>
            </div>
    )
}

export default HeroCard;
