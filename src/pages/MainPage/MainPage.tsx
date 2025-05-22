import React from 'react';
import MainAutoCard from '../../components/UI/MainAutoCard/MainAutoCard';
import FindAutoForm from '../../components/UI/FindAutoForm/FindAutoForm';
import "./MainContent.scss";

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

                <ul className='mainPageCarsList'>
                    <li className='mainPageCarsList__item'>
                        <MainAutoCard />
                    </li>
                    <li className='mainPageCarsList__item'>
                        <MainAutoCard />
                    </li>
                    <li className='mainPageCarsList__item'>
                        <MainAutoCard />
                    </li>
                </ul>
                
                <FindAutoForm />
            </main>
        </div>
    );
}

export default MainPage;
