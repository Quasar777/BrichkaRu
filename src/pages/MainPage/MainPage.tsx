import React from 'react';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';
import MainContent from './MainContent';

const MainPage = () => {
    return (
        <div>
            <Header />
            <main>
                <MainContent />
                <Outlet />
            </main>
        </div>
    );
}

export default MainPage;
