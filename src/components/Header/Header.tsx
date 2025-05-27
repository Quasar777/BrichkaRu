import { Link, NavLink } from "react-router-dom";
import MyButton from "../UI/Button/MyButton";
import "./Header.scss";
import { AuthContext } from "../../context/AuthContext";
import { use, useContext, useState } from "react";

const Header = () => {
    const authContext = useContext(AuthContext);

    if (!authContext) {
        return <p>Ошибка!</p>;
    }

    const {isAuth, username} = authContext;

    return (
        <div className="header">
        <nav className="navbar container">
            <a href="/" className="logo">
            <img src="/logo.svg" width={44} height={37} alt="logo" />
            <p className="logo__title">Brichka.Ru</p>
            </a>
            <div className="logo__overlay">
            <NavLink to="/autos">
                <MyButton title="Автомобили" />
            </NavLink>
            <Link to="/trucks">
                <MyButton title="Грузовики" />
            </Link>
            <Link to="/createAd">
                <MyButton accented title="Разместить объявление" />
            </Link>
            {
                isAuth 
                ? <Link to="/profile">
                    <MyButton title={username} />
                </Link>
                : <Link to="/signUp">
                    <MyButton title="Регистрация/вход" />
                </Link>
            }
            

            </div>
        </nav>
        </div>
    );
};

export default Header;
