import React, { useMemo } from 'react';

import HeroCard from './HeroCard';

import { getHeroByPublisher } from '../../selectors/getHeroByPublisher'; 
import './index.css'

const HeroList = ({publisher}) => {

    const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher])

    return (
        <div className="_hero-card-container animate__animated animate__fadeIn">
            {
                heroes.map(heroe => (
                    <HeroCard 
                        key={heroe.id}
                        {...heroe}
                    />
                ))
            }
        </div>
    )
}

export default HeroList;





