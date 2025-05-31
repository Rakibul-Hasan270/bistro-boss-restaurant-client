import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/shared/Footer/Footer';
import Navbar from '../pages/shared/Navbar/Navbar';

const Main = () => {
    const location = useLocation();
    const isLogin = location.pathname.includes('login') || location.pathname.includes('register');

    return (
        <div className='px-4'>
            {isLogin ? undefined : <Navbar></Navbar>}
            <Outlet></Outlet>
            {isLogin ? undefined : <Footer></Footer>}
        </div>
    );
};

export default Main;