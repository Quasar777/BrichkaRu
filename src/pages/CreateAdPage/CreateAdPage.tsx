import React from 'react';
import "./CreateAdPage.scss"
import PageTitle from '../../components/UI/PageTitle/PageTitle';
import CreateAdForm from '../../components/UI/CreateAdForm/CreateAdForm';

const CreateAdPage = () => {
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
