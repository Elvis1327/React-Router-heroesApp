import React from 'react';

import HeroList from '../heroe/HeroList'; //Component

const DcScreen = () => {
    return (
        <div>
            <h1>Dc Screen</h1>
            <hr />
            <HeroList publisher="DC Comics" />
        </div>
    )
}

export default DcScreen
