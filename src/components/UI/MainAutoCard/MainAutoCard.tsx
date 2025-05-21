import React from 'react';
import "./MainAutoCard.scss";
import { Link } from 'react-router-dom';


const MainAutoCard = () => {
    return (
        <Link to="/autos" className='mainCard'>
            <div className='mainCard__image-container'>
                <img 
                    src='/RangeRover.png'
                    width={395}
                    height={315}
                    alt='car'
                    className='mainCard__image'
                />
                <div className='mainCard__price'>
                    <p>34 900 000₽</p>
                </div>
            </div>
            <div className="mainCard__content">
                <p className='mainCard__title'>Range Rover, 2014</p>
                <p className='mainCard__location'>Мытищи</p>
            </div>
        </Link>
    );
}

export default MainAutoCard;
