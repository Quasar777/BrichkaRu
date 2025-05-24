import React from 'react';
import "./MainAutoCard.scss";
import { Link } from 'react-router-dom';

interface mainAutoCardProps {
    price: Number,
    title: String,
    location: String,
    year: Number,
    pathToImage: String,
    carId: Number
}

const MainAutoCard = ({price, title, location, year, pathToImage, carId} : mainAutoCardProps) => {
    function getNormalPrice(price: string | undefined) {
        if (!price){
            return "ошибка";
        }
        return price.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    }

    return (
        <Link to={`/autos/${carId}`} className='mainCard'>
            <div className='mainCard__image-container'>
                <img 
                    src={pathToImage.toString()}
                    width={395}
                    height={315}
                    alt='car'
                    className='mainCard__image'
                />
                <div className='mainCard__price'>
                    <p>{getNormalPrice(price.toString())}₽</p>
                </div>
            </div>
            <div className="mainCard__content">
                <p className='mainCard__title'>{title}, {year.toString()}</p>
                <p className='mainCard__location'>{location}</p>
            </div>
        </Link>
    );
}

export default MainAutoCard;
