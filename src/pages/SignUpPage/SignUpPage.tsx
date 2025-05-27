import React from 'react';
import SignUpForm from '../../components/UI/SignUpForm/SignUpForm';
import "./SignUpPage.scss";
import PageTitle from '../../components/UI/PageTitle/PageTitle';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
    return (
        <div>
            <main className="main">
                <section className='signUpSection'>
                    <PageTitle pageName={"Регистрация"}/>
                    <SignUpForm />
                </section>

                <Link to={"/signin"}>
                    Страница авторизации
                </Link>
            </main>
        </div>
    );
}

export default SignUpPage;
