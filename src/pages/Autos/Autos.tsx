import React from 'react';
import FindAutoForm from '../../components/UI/FindAutoForm/FindAutoForm';
import AutoCard from '../../components/UI/AutoCard/AutoCard';

const Autos = () => {
    return (
        <main className='main'>
            <FindAutoForm />

            <p>Нашлось объявлений: 1</p>

            <AutoCard />
        </main>
    );
}

export default Autos;
