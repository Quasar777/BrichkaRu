import React from 'react';
import PageTitle from '../../components/UI/PageTitle/PageTitle';
import "./AdPage.scss"
import MyButton from '../../components/UI/Button/MyButton';
import { Button, Card, ConfigProvider } from 'antd';
import TextArea from 'antd/es/input/TextArea';

const AdPage = () => {
    
    return (
        <div>
            <main className="main">
                <PageTitle pageName="Объявление о продаже: Bugatti Chiron, 2021 год в Москве"/>

                <section className='carInfo'>
                    <img 
                        src="https://avatars.mds.yandex.net/get-autoru-vos/2142835/45d0fea7d0a703fcf53ed7ec7d3c3420/1200x900" 
                        alt="фотография машины"
                        width={660}
                        height={530} 
                    />
                    <div className="carInfo__body">
                        <div className="carInfo__leftSide">
                            <p className="carInfo__price">10 000 000 ₽</p>
                            <ul className='carInfo__list'>
                                <li className="carInfo__item">Двигатель: <b>бензин</b></li>
                                <li className="carInfo__item">Мощность: <b>1280 л.с.</b></li>
                                <li className="carInfo__item">Коробка: <b>автомат</b></li>
                                <li className="carInfo__item">Цвет: <b>бело-синий</b></li>
                                <li className="carInfo__item">Тип кузова: <b>седан</b></li>
                                <li className="carInfo__item">Руль: <b>левый</b></li>
                                <li className="carInfo__item">Пробег: <b>2400 км</b></li>
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
                                <p className="carInfo__author-name">JETCAR</p>
                                <p className='carInfo__author-status'>Автосалон</p>
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
