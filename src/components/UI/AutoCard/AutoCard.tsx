import React from 'react';
import "./AutoCard.scss"
import { Link, useParams } from 'react-router-dom';
import { carFakeData, dealersFakeData } from '../../../fakeData/carData';


const AutoCard = ({carId}: {carId : number}) => {
    function getNormalPrice(price: string | undefined) {
        if (!price){
            return "ошибка";
        }
        return price.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    }

    const car = carFakeData.find(car => car.id === carId);
    const dealer = dealersFakeData.find(d => d.adId === car?.id)

    return (
        <Link to={`/autos/${carId}`} className='autoCard'>
            <img 
                className='autoCard__image'
                src={car?.pathToImage} 
                alt="название машины" 
                width={330}
                height={300}
            />
            <div className='autoCard__body'>
                <div className="autoCard__carInfo">
                    <p className='autoCard__title'>{car?.brand} {car?.model}, {car?.year}</p>
                    <ul className="autoCard__carInfo-list">
                        <li className="autoCard__carInfo-item">Объем: <b>{car?.engineVolume} л</b></li>
                        <li className="autoCard__carInfo-item">Двигатель: <b>{car?.engineType}</b></li>
                        <li className="autoCard__carInfo-item">Мощность: <b>{car?.enginePower} л.с.</b></li>
                        <li className="autoCard__carInfo-item">Пробег: <b>{car?.mileAge}</b></li>
                    </ul>
                </div>

                <div className='autoCard__author-info'>
                    <div className='autoCard__author-containter'>
                        <p className="autoCard__author">{dealer?.name}</p>
                        <div className='autoCard__location'>
                            <img 
                                className='autoCard__location-pin'
                                src='/location-pin.svg'
                                alt='местоположение'
                                width={19}
                                height={19}
                            />
                            <p className='autoCard__location-title'>{car?.locaionDistrict}</p>
                        </div>
                    </div>
                    <div className="autoCard__price">
                        <p>{getNormalPrice(car?.price.toString())}₽</p>
                    </div>
                </div>

                <div className="autoCard__like">
                    <svg className='likeIcon' width="50px" height="50px" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M44.887 14.5538C48.4958 18.1626 48.6341 23.9697 45.2009 27.7459L27.9988 46.6669L10.7989 27.7459C7.36584 23.9697 7.50412 18.1625 11.1129 14.5536C15.1424 10.5242 21.7787 10.8924 25.3386 15.3422L28 18.6678L30.6591 15.3418C34.219 10.892 40.8576 10.5243 44.887 14.5538Z" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                
            </div>

        </Link>
    );
}

export default AutoCard;
