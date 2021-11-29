import React from 'react';
import { Route, Routes } from 'react-router';


// import Navbar from '../components/ui/Navbar';
import DcScreen from '../components/dc/DcScreen';
import MarvelScreen from '../components/marvel/MarvelScreen';
import SearchScreen from '../components/search/SearchScreen';
import HeroeScreen from '../components/heroe/HeroeScreen';

const DashboardRoutes = () => {
    return (
        <div className="container">
            <Routes>
                <Route path="marvel" element={<MarvelScreen />} />
                <Route path="dc" element={<DcScreen />} />

                <Route path="search" element={<SearchScreen />} />
                <Route path="heroe/:id" element={<HeroeScreen />} />
                <Route path="/" element={<MarvelScreen />} />

            </Routes>
        </div>
    )
}

export default DashboardRoutes
