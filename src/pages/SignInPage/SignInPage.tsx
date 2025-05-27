import React from 'react';
import SignInForm from '../../components/UI/SignInForm/SignInForm';
import PageTitle from '../../components/UI/PageTitle/PageTitle';
import "./SignInPage.scss";
import { Link } from 'react-router-dom';

const SignInPage = () => {
    return (
        <div>
            <main className="main">
                <section className='signInSection'>
                    <PageTitle pageName={"Авторизация"}/>
                    <SignInForm />
                </section>
                <Link to={"/signup"}>
                    Страница регистрации
                </Link>
            </main>
        </div>
    );
}

export default SignInPage;
