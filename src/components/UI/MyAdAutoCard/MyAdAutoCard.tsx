import React from 'react';
import { carFakeData } from '../../../fakeData/carData';
import { dealersFakeData } from '../../../fakeData/carData';
import { Link } from 'react-router-dom';
import "./MyAdAutoCard.scss"

const MyAdmyAdAutoCard = ({carId}: {carId : number}) => {
    function getNormalPrice(price: string | undefined) {
        if (!price){
            return "ошибка";
        }
        return price.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    }

    const car = carFakeData.find(car => car.id === carId);
    const dealer = dealersFakeData.find(d => d.adId === car?.id)

    return (
        <Link to={`/autos/${carId}`} className='myAdAutoCard'>
            <img 
                className='myAdAutoCard__image'
                src={car?.pathToImage} 
                alt="название машины" 
                width={330}
                height={300}
            />
            <div className='myAdAutoCard__body'>
                <div className="myAdAutoCard__carInfo">
                    <p className='myAdAutoCard__title'>{car?.brand} {car?.model}, {car?.year}</p>
                    <ul className="myAdAutoCard__carInfo-list">
                        <li className="myAdAutoCard__carInfo-item">Объем: <b>{car?.engineVolume} л</b></li>
                        <li className="myAdAutoCard__carInfo-item">Двигатель: <b>{car?.engineType}</b></li>
                        <li className="myAdAutoCard__carInfo-item">Мощность: <b>{car?.enginePower} л.с.</b></li>
                        <li className="myAdAutoCard__carInfo-item">Пробег: <b>{car?.mileAge}</b></li>
                        <li className="myAdAutoCard__carInfo-item">Цена: <b className='myAdAutoCard__price'>{getNormalPrice(car?.price.toString())}₽</b></li>
                    </ul>
                </div>

                <div className='myAdAutoCard__analyse-info'>
                    <div className="myAdAutoCard__analyse-container">
                        <p className='myAdAutoCard__title'>Аналитика</p>
                        <ul className="myAdAutoCard__analyse-list">
                            <li className="myAdAutoCard__analyse-item">просмотров: <b>100</b></li>
                            <li className="myAdAutoCard__analyse-item myAdAutoCard__analyse-item">цена по рынку: <b style={{color: "green"}}>хорошая</b></li>
                            <li className="myAdAutoCard__analyse-item">добавили в избранное: <b>100</b></li>
                        </ul>
                    </div>
                </div>            
            </div>

        </Link>
    );
}

export default MyAdmyAdAutoCard;
