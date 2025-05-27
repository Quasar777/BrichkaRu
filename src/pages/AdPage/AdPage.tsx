import React, { useState } from 'react';
import PageTitle from '../../components/UI/PageTitle/PageTitle';
import "./AdPage.scss"
import MyButton from '../../components/UI/Button/MyButton';
import { Button, Card, message, Modal } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useParams } from 'react-router-dom';
import { carFakeData, dealersFakeData } from '../../fakeData/carData';



const AdPage = () => {
    const [phoneNumberOpen, setPhoneNumberOpen] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    const [complainModalopen, setcomplainModalOpen] = useState(false);
    const [complainMessage, setComplainMessage] = useState("");
    const [liked, setLiked] = useState(false);

    // сделать лайк только авторизованному

    const showComplainModal = () => {
        setcomplainModalOpen(true);
    };

    const showSuccessComplained = () => {
        messageApi.open({
            type: 'success',
            content: 'Жалоба успешно отправлена!',
        });
        setcomplainModalOpen(false);
    };

    const handleCancel = () => {
        setcomplainModalOpen(false);
    };

    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Номер телефона успешно скопирован!',
        });
    };

    function showNumber() {
        setPhoneNumberOpen(true);
    }

    function copyNumber() {
        const phoneNumber = dealer?.phoneNumber;
        
        if (!phoneNumber) {
            return;
        }

        navigator.clipboard.writeText(phoneNumber.toString());
        success();
    }

    const updateLike = () => {


        if (!liked) 
        {
            setLiked(true);
        }
        else {
            setLiked(false);
        }
    }

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
                                <li className="carInfo__item">Объем: <b>{car.engineVolume} л.</b></li>
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
                                {
                                    liked 
                                    ?  <p onClick={updateLike} className='carInfo__like-title carInfo__like-title--liked'>Добавлено в</p>
                                    : <p onClick={updateLike} className='carInfo__like-title'>Добавить в </p>
                                }
                                
                                {
                                    liked 
                                    ? <svg className='likeIcon' width="40px" height="40px" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M44.887 14.5538C48.4958 18.1626 48.6341 23.9697 45.2009 27.7459L27.9988 46.6669L10.7989 27.7459C7.36584 23.9697 7.50412 18.1625 11.1129 14.5536C15.1424 10.5242 21.7787 10.8924 25.3386 15.3422L28 18.6678L30.6591 15.3418C34.219 10.892 40.8576 10.5243 44.887 14.5538Z" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    : <svg width="40px" height="40px" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M44.887 14.5538C48.4958 18.1626 48.6341 23.9697 45.2009 27.7459L27.9988 46.6669L10.7989 27.7459C7.36584 23.9697 7.50412 18.1625 11.1129 14.5536C15.1424 10.5242 21.7787 10.8924 25.3386 15.3422L28 18.6678L30.6591 15.3418C34.219 10.892 40.8576 10.5243 44.887 14.5538Z" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                }
                                
                                
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
                                        {contextHolder}
                                        { !phoneNumberOpen 
                                            ? <Button onClick={showNumber} style={{color: "#58B1FF"}} type="text">Позвонить</Button>
                                            : <Button title='Скопировать' onClick={copyNumber} style={{color: "#58B1FF"}} type="text">{dealer?.phoneNumber}</Button>
                                        }
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
                    <Button onClick={showComplainModal} variant='text' className='carInfo__complain'>
                        <p className='carInfo__complain-text'>Пожаловаться на объявление</p>
                        <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M44.6875 27.5C44.6875 36.9923 36.9923 44.6875 27.5 44.6875C18.0076 44.6875 10.3125 36.9923 10.3125 27.5C10.3125 18.0076 18.0076 10.3125 27.5 10.3125C36.9923 10.3125 44.6875 18.0076 44.6875 27.5ZM48.125 27.5C48.125 38.891 38.891 48.125 27.5 48.125C16.1091 48.125 6.875 38.891 6.875 27.5C6.875 16.1091 16.1091 6.875 27.5 6.875C38.891 6.875 48.125 16.1091 48.125 27.5ZM25.7812 30.9375V18.9062H29.2188V30.9375H25.7812ZM25.7812 36.0938V32.6562H29.2188V36.0938H25.7812Z" fill="#FF2A2A"/>
                        </svg>
                    </Button>
                    <Modal
                        open={complainModalopen}
                        title="Пожаловаться"
                        onCancel={handleCancel}
                        footer={[
                            <Button 
                                disabled={complainMessage.length < 20} 
                                key="submit" 
                                type="primary" 
                                onClick={showSuccessComplained}
                            >
                                Отправить жалобу
                            </Button>,
                            <Button key="back" onClick={handleCancel}>
                                Отмена
                            </Button>                        
                        ]}
                        maskClosable={true}
                        bodyStyle={{ overflowY: 'auto' }}
                        modalRender={(modal) => (
                            <div style={{ overflow: 'hidden' }}>{modal}</div>
                        )}
                        // можно попробовать также
                        getContainer={false} 
                    >
                        <TextArea 
                            className='carInfo__complainModal-textarea' 
                            rows={4} 
                            value={complainMessage} 
                            onChange={e => setComplainMessage(e.target.value)}
                            maxLength={200} 
                            placeholder='Опишите нарушение (не менее 20 символов)' 
                        />                
                    </Modal>
                </div>
            </main>
        </div>
    );
}

export default AdPage;
