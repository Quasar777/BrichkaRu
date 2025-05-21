import React from 'react';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';
import MainContent from './MainContent';

const MainPage = () => {
    return (
        <div>
            <main className='main'>
                <div className='title-container'>
                    <h1 className='title-container__title'>Главная</h1>
                    <div className='title-container__location'>
                        <img 
                            className='title-container__location-pin'
                            src='/location-pin.svg'
                            alt='местоположение'
                            width={28}
                            height={28}
                        />
                        <p className='title-container__location-title'>Москва</p>
                    </div>
                </div>
                <MainContent />
            </main>
        </div>
    );
}

export default MainPage;
