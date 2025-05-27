import React, { useContext, useEffect } from 'react';
import PageTitle from '../../components/UI/PageTitle/PageTitle';
import "./ProfilePage.scss"
import MyAdAutoCard from '../../components/UI/MyAdAutoCard/MyAdAutoCard';
import AutoCard from '../../components/UI/AutoCard/AutoCard';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Spin } from 'antd';
import ErrorCard from '../../components/UI/ErrorCard/ErrorCard';

const ProfilePage = () => {
    const authContext = useContext(AuthContext);
    const navigate = useNavigate()
    
    useEffect(() => {
        if (authContext && !authContext.isAuth) {
            setTimeout(() => {
                navigate('/signin');    
            }, 500)
        }
    }, [authContext, navigate]);

    if (!authContext) {
        return <ErrorCard errorMessage='Неизвестная ошибка' />;
    }

    if (!authContext.isAuth) {
        return <ErrorCard errorMessage='Вы не авторизованы!' />;
    }

    const {username} = authContext;

    return (
        <div>
            <main className="main">
                <section className="contact">
                    <PageTitle pageName={"Личный кабинет"}/>
                    <section className="contact__profileInfo">
                        <div className="contact__left">
                            <div className="contact__image-box">
                                <svg width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M34.5002 68.225C52.9167 68.225 68.2253 52.9495 68.2253 34.5C68.2253 16.0836 52.8836 0.775055 34.4672 0.775055C16.0176 0.775055 0.775391 16.0836 0.775391 34.5C0.775391 52.9495 16.0507 68.225 34.5002 68.225ZM34.5002 45.7747C24.548 45.7747 16.8773 49.3125 13.5378 53.2801C9.10735 48.3205 6.42911 41.7409 6.42911 34.5C6.42911 18.927 18.8612 6.3959 34.4672 6.3959C50.0401 6.3959 62.5712 18.927 62.6045 34.5C62.6045 41.7741 59.9262 48.3536 55.4626 53.3132C52.1231 49.3455 44.4524 45.7747 34.5002 45.7747ZM34.5002 40.1539C40.8484 40.22 45.8411 34.7975 45.8411 27.6889C45.8411 21.0101 40.8154 15.4554 34.5002 15.4554C28.152 15.4554 23.0933 21.0101 23.1595 27.6889C23.1925 34.7975 28.119 40.0877 34.5002 40.1539Z" fill="#44BEFF"/>
                                </svg>
                            </div>
                            <div className="contact__info">
                                <p className="contact__login">{username}</p>
                                <p className="contact__status">Создатель</p>
                            </div>
                        </div>
                        <div className="contact__right">
                            <ul className="contact__info-list">
                                <li className="contact__info-item">
                                    <p className="contact__info-title">Телефон</p>
                                    <p className="contact__phone">+7-987-654-32-10</p>
                                </li>
                                <li className="contact__info-item">
                                    <p className="contact__info-title">Пароль</p>
                                    <p className="contact__password">··········</p>
                                </li>
                                <li className="contact__info-item">
                                    <p className="contact__info-title">Email</p>
                                    <p className="contact__email"><a href="#">Подтвердить</a></p>
                                </li>
                            </ul>
                        </div>
                    </section>
                </section>
                <section className="myAds">
                    <h2 className='myAds__title'>Мои объявления</h2>
                    <ul className="myAds__list">
                        <li className="myAds__item">
                            <MyAdAutoCard carId={2} />
                        </li>
                    </ul>
                </section>
                <section className="myFavourites">
                    <h2 className='myFavourites__title'>Избранные объяления</h2>
                    <ul className="myFavourites__list">
                        <li className="myFavourites__item">
                            <AutoCard carId={1} />
                        </li>
                    </ul>
                </section>
            </main>
        </div>
    );
}

export default ProfilePage;
