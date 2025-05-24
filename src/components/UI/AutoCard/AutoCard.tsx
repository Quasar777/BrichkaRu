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
                    <img 
                        src="/heart.svg" 
                        alt="добавить в избранное" 
                        width={56}
                        height={56}    
                    />
                </div>
                
            </div>

        </Link>
    );
}

export default AutoCard;
