import React from 'react';
import ErrorCard from '../../components/UI/ErrorCard/ErrorCard';

const ErrorPage = () => {
    return (
        <div>
            <main>
                <ErrorCard errorMessage='Такой страницы нет!'/>
            </main>
        </div>
    );
}

export default ErrorPage;
