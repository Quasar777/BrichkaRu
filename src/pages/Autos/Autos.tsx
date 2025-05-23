import React from 'react';
import FindAutoForm from '../../components/UI/FindAutoForm/FindAutoForm';
import AutoCard from '../../components/UI/AutoCard/AutoCard';
import "./Autos.scss";
import PageTitle from '../../components/UI/PageTitle/PageTitle';

const Autos = () => {
    return (
        <main className='main'>
            <PageTitle pageName={"Автомобили"}/>

            <FindAutoForm />
        
            <p className='adFound__title'>Нашлось объявлений: 3</p>

            <ul className="autosList">
                <li className="autosList__item"><AutoCard /></li>
                <li className="autosList__item"><AutoCard /></li>
                <li className="autosList__item"><AutoCard /></li>
            </ul>
            
        </main>
    );
}

export default Autos;
