import React from 'react';
import SignUpForm from '../../components/UI/SignUpForm/SignUpForm';
import "./SignUpPage.scss";
import PageTitle from '../../components/UI/PageTitle/PageTitle';

const SignUpPage = () => {
    return (
        <div>
            <main className="main">
                <section className='signUpSection'>
                    <PageTitle pageName={"Регистрация"}/>
                    <SignUpForm />
                </section>
            </main>
        </div>
    );
}

export default SignUpPage;
