import { Link, NavLink } from "react-router-dom";
import MyButton from "../UI/Button/MyButton";
import "./Header.scss";
import { AuthContext } from "../../context/AuthContext";
import { use, useContext, useEffect, useState } from "react";
import './header-overlay.js'
import HeaderOverlay from "./header-overlay.js";

const Header = () => {
    const authContext = useContext(AuthContext);


    useEffect(() => {
        const timeout = setTimeout(() => {
            new HeaderOverlay();
        }, 0);
        
        return () => clearTimeout(timeout);
    }, [])
    

    if (!authContext) {
        return <p>Ошибка!</p>;
    }

    const {isAuth, username} = authContext;

    return (
        <div className="header" data-js-header>
            <div className="header__inner container">
                <Link
                    to="/" 
                    className="logo"
                    aria-label="Главная"
                    title="Главная"
                >
                    <img 
                        src="/logo.svg" 
                        width={44} 
                        height={37} 
                        alt="логотип" 
                    />
                    <p className="logo__title">Brichka.Ru</p>
                </Link>

                <div className="header__overlay" data-js-header-overlay>
                    <nav className="header__menu">
                        <ul className="header__menu-list">
                            <li className="header__menu-item">
                                <NavLink to="/autos">
                                    <MyButton className="header__menu-link" title="Автомобили" />
                                </NavLink>
                            </li>
                            <li className="header__menu-item">
                                <Link to="/trucks">
                                    <MyButton className="header__menu-link" title="Грузовики" />
                                </Link>
                            </li>
                            <li className="header__menu-item">
                                <Link to="/createAd">
                                    <MyButton className="header__menu-link" accented title="Разместить объявление" />
                                </Link>
                            </li>
                            <li className="header__menu-item">
                                {
                                    isAuth 
                                    ? <Link to="/profile">
                                        <MyButton className="header__menu-link" title={username} />
                                    </Link>
                                    : <Link to="/signUp">
                                        <MyButton className="header__menu-link" title="Регистрация/вход" />
                                    </Link>
                                }
                            </li>
                        </ul>
                    </nav>
                </div>
                <button 
                    className="header__burger-button burger-button visible-mobile"
                    type="button"    
                    aria-label="Open menu"
                    title="Open menu"
                    data-js-header-burger-button
                >
                    <span className="burger-button__line"></span>
                    <span className="burger-button__line"></span>
                    <span className="burger-button__line"></span>
                </button>
            </div>
        </div>
    );
};

export default Header;
