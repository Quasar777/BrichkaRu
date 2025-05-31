import React, { useContext } from 'react';
import "./CreateAdPage.scss"
import PageTitle from '../../components/UI/PageTitle/PageTitle';
import CreateAdForm from '../../components/UI/CreateAdForm/CreateAdForm';
import { AuthContext } from '../../context/AuthContext';
import ErrorCard from '../../components/UI/ErrorCard/ErrorCard';

const CreateAdPage = () => {
    const authcontext = useContext(AuthContext);
    if (!authcontext) {
        return <ErrorCard errorMessage='Ошибка авторизации!'/>
    }

    const {isAuth} = authcontext;

    if (!isAuth) {
        return <ErrorCard errorMessage='Ошибка авторизации!'/>
    }

    return (
        <main className='main'>
            <section className='content'>
                <PageTitle pageName={"Создать объявление"}/>

                <CreateAdForm />
            </section>
        </main>
    );
}

export default CreateAdPage;
