import React from 'react';
import PageTitle from '../../components/UI/PageTitle/PageTitle';
import "./AdPage.scss"
import MyButton from '../../components/UI/Button/MyButton';
import { Button, Card, ConfigProvider } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useParams } from 'react-router-dom';
import { carFakeData, dealersFakeData } from '../../fakeData/carData';


const AdPage = () => {
    
    const { id } = useParams();
    const numericId = Number(id);
    const car = carFakeData.find(car => car.id === numericId);
    if (!car) {
        return <div>Такого автомобиля нет!</div>
    }

    const dealer = dealersFakeData.find(d => d.adId === car.id)
    
    return (
        <div>
            <main className="main">
                 <PageTitle pageName={`Объявление о продаже: ${car.brand} ${car.model}, ${car.year} год, ${car.locationCity}`} />

                <section className='carInfo'>
                    <img 
                        className='carInfo__image'
                        src={car.pathToImage} 
                        alt="фотография машины"
                        width={660}
                        height={530}
                    />
                    <div className="carInfo__body">
                        <div className="carInfo__leftSide">
                            <p className="carInfo__price">{car.price.toLocaleString()} ₽</p>
                            <ul className='carInfo__list'>
                                <li className="carInfo__item">Двигатель: <b>{car.engineType}</b></li>
                                <li className="carInfo__item">Мощность: <b>{car.enginePower} л.с.</b></li>
                                <li className="carInfo__item">Коробка: <b>{car.gearBoxType}</b></li>
                                <li className="carInfo__item">Тип кузова: <b>{car.bodyType}</b></li>
                                <li className="carInfo__item">Руль: <b>{car.steeringWheelPosition === "left" ? "левый" : "правый"}</b></li>
                                <li className="carInfo__item">Пробег: <b>{car.mileAge.toLocaleString()} км</b></li>
                            </ul>
                            <Button color="default" variant="solid">
                                Заказать отчет
                            </Button>
                        </div>
                        <div className="carInfo__rightSide">
                            <div className="carInfo__like">
                                <p className='carInfo__like-title'>В избранное</p>
                                <img 
                                    className='carInfo__like-icon'
                                    src="/heart-active.svg" 
                                    alt="добавить в избранное" 
                                    width={40}
                                    height={40}
                                />
                            </div>
                            <div className="carInfo__author">
                                <div className="carInfo__author-box">
                                    <img 
                                        className="carInfo__author-image"
                                        src="/dealerImage.svg" 
                                        alt="фотография продавца"
                                        width={80}
                                        height={80} 
                                    />
                                </div>
                                <p className="carInfo__author-name">{dealer?.name ?? "неизвестен"}</p>
                                <p className='carInfo__author-status'>{dealer?.status}</p>
                                <div className="carInfo__author-call">
                                    <div className="carInfo__author-call-title">
                                        <Button style={{color: "#58B1FF"}} type="text">Позвонить</Button>
                                    </div>
                                    <img
                                        alt='позвонить'
                                        src='/phone.svg'
                                        width={24}
                                        height={24}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className='carInfo__descr'>
                    <div className='carInfo__descr-container'>
                        <h3 className='carInfo__descr-title'>Описание</h3>
                        <Card style={{ width: 660 }}>
                            <p>
                                Новый, не битый не крашеный. Коробка чуть стучит, а так понторезка хорошая.
                                <br/>
                                ***
                                <br/>
                                Обмен не рассматириваю (ТОЛЬКО НА ПРИОРУ!!!)<br/> 
                                ***
                                <br/>
                                Звоните, пишите! 
                            </p>
                        </Card>
                    </div>
                    <Button style={{border: "none"}} variant='text' className='carInfo__complain'>
                        <p className='carInfo__complain-text'>Пожаловаться на объявление</p>
                        <img 
                            className='carInfo__complain-image'
                            width={55}
                            height={55}
                            src='/warning.svg'
                        />
                    </Button>
                </div>
            </main>
        </div>
    );
}

export default AdPage;
