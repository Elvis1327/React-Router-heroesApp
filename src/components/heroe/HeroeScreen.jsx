import React, { useMemo } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';

import getHeroById from '../../selectors/getHeroById';

const HeroeScreen = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const resp = useMemo(() => getHeroById(id),[id]);

    const handleReturn = () => {
        navigate(-1)
    };

if(!resp ) return (
    <Navigate to="/" />
)
    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    src={resp.img} 
                    alt="pic-heroe"
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>
            <div className="col-8 animate__animated animate__fadeIn">
                <h3>{resp.superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Alter Ego: </b> {resp.alter_ego}
                    </li>
                    <li className="list-group-item">
                        <b>Publisher: </b> {resp.publisher}
                    </li>
                    <li className="list-group-item">
                        <b>First Appearance: </b> {resp.first_appearance}
                    </li>
                </ul>
                <h5 className="mt-3">Characters</h5>
                <p>{resp.characters}</p>

                <button 
                    className="btn btn-outline-info"
                    onClick={handleReturn}
                >
                    Go back
                </button>
            </div>
        </div>
    )
}

export default HeroeScreen;
