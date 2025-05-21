import React from 'react';
import MainAutoCard from '../../components/UI/MainAutoCard/MainAutoCard';
import "./MainContent.scss"
import FindAutoForm from '../../components/UI/FindAutoForm/FindAutoForm';

const MainContent = () => {
    return (
        <div>
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
                <li className='mainPageCarsList__item'>
                    <MainAutoCard />
                </li>
            </ul>
            
            <FindAutoForm />
            
        </div>
    );
}

export default MainContent;
