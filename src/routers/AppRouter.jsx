import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import Login from '../components/login/Login';
import Navbar from '../components/ui/Navbar';
import DashboardRoutes from './DashboardRoutes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoutes';


const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/login" element={
                    <PublicRoute>
                        <Login />
                    </PublicRoute>
                } />
                
                <Route path="/*" element={
                    <PrivateRoute>
                        <DashboardRoutes />
                    </PrivateRoute>
                } />


                {/* <Route path="/*" element={<DashboardRoutes />} /> */}
            </Routes>
        </Router>
    )
}

export default AppRouter;


