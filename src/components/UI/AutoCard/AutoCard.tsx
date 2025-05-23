import React from 'react';
import "./AutoCard.scss"
import { Link } from 'react-router-dom';

const AutoCard = () => {
    return (
        <Link to="/autos/1" className='autoCard'>
            <img 
                className='autoCard__image'
                src="/autoCardExample.png" 
                alt="название машины" 
                width={330}
                height={300}
            />
            <div className='autoCard__body'>
                <div className="autoCard__carInfo">
                    <p className='autoCard__title'>Лада 2104, 2001</p>
                    <ul className="autoCard__carInfo-list">
                        <li className="autoCard__carInfo-item">Объем: <b>5,5 л</b></li>
                        <li className="autoCard__carInfo-item">Двигатель: <b>Бензин</b></li>
                        <li className="autoCard__carInfo-item">Мощность: <b>1183 л.с.</b></li>
                        <li className="autoCard__carInfo-item">Пробег: <b>43000</b></li>
                    </ul>
                </div>

                <div className='autoCard__author-info'>
                    <div className='autoCard__author-containter'>
                        <p className="autoCard__author">Андрей</p>
                        <div className='autoCard__location'>
                            <img 
                                className='autoCard__location-pin'
                                src='/location-pin.svg'
                                alt='местоположение'
                                width={19}
                                height={19}
                            />
                            <p className='autoCard__location-title'>Люблино</p>
                        </div>
                    </div>
                    <div className="autoCard__price">
                        <p>299 000 ₽</p>
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
