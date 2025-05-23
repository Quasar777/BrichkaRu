import React from 'react';
import "./MainAutoCard.scss";
import { Link } from 'react-router-dom';

interface mainAutoCardProps {
    price: Number,
    title: String,
    location: String,
    year: Number,
    pathToImage: String
}

const MainAutoCard = ({price, title, location, year, pathToImage} : mainAutoCardProps) => {
    function getNormalPrice(price: String) {
        if (price.length < 5)   
            return price;
        else if(price.length == 5) {
            return price.substring(0, 2) + ' ' + price.substring(2);
        }
        else if(price.length == 6) {
            return price.substring(0, 3) + ' ' + price.substring(3);
        }
        else if(price.length == 7) {
            return price[0] + ' ' + price.substring(1, 4) + ' ' + price.substring(4);
        }
        else if(price.length == 8) {
            return price.substring(0, 2) + ' ' + price.substring(2, 5) + ' ' + price.substring(5);
        }
        else if(price.length == 9) {
            return price.substring(0, 3) + ' ' + price.substring(3, 6) + ' ' + price.substring(6);
        }
        else if(price.length == 10) {
            return price[0] + ' ' + price.substring(1, 4) + ' ' + price.substring(4, 7) + ' ' + price.substring(7);
        }
        else if(price.length > 10) {
            return "Много"
        }
    }

    return (
        <Link to="/autos/1" className='mainCard'>
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
