import React, { useState, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'
import queryString from 'query-string';

import HeroeCard from '../../components/heroe/HeroCard';

import { getHeroesByName } from '../../selectors/getHeroByName';

const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);
    
    const [ inputValue, setInputValue ] = useState(q);
    const heroesFiltered = useMemo(() => getHeroesByName(q), [q])
    
    const handleSubmit = e => {
        e.preventDefault();
        navigate(`?q=${inputValue}`);
    };
    const handleInput = e => {
        setInputValue(e.target.value);
    };

    return (
        <>
            <h1>Busquedas</h1>
            <hr />

            <div className="row">

                <div className="col-5">
                    <h4>Search</h4>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            placeholder="Search un heroe"
                            className="form-control"
                            name="search"
                            autoComplete="off"
                            value={inputValue}
                            onChange={handleInput}
                        />
                        <button 
                            className="btn btn-success mt-2"
                            type="submit"
                        >
                            Buscar
                        </button>
                    </form>

                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    {q === '' 
                        ? <div className="alert alert-info">Search a Hero</div>
                        : heroesFiltered.length === 0 &&
                        <div className="alert alert-danger">There are not results</div>
                    }

                    {heroesFiltered.map(heroe => (
                        <HeroeCard key={heroe.id} {...heroe} />
                    ))}
                </div>

            </div>

        </>
    )
}

export default SearchScreen;
