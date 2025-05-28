import React, { JSX, useEffect, useState } from 'react';
import MainAutoCard from '../../components/UI/MainAutoCard/MainAutoCard';
import FindAutoForm from '../../components/UI/FindAutoForm/FindAutoForm';
import "./MainContent.scss";
import PageTitle from '../../components/UI/PageTitle/PageTitle';
import { title } from 'process';
import { Carousel, ConfigProvider, Slider } from 'antd';
import { carFakeData } from '../../fakeData/carData';
import axios from 'axios';
import { Car } from '../../types/Car';
import WarningCard from '../../components/UI/WarningCard/WarningCard';

const carouselStyle: React.CSSProperties = {
  paddingBottom: 20,
};

const MainPage = () => {

    const [loading, setLoading] = useState(false);

    const maxItems = 30;
    const itemsPerSlide = 3;
    const [backendCars, setBackendCars] = useState<Car[]>([]);

    useEffect(() => {
        setLoading(true)
        axios.get<Car[]>('http://localhost:5072/api/cars')
        .then(res => {
            setBackendCars(res.data);
        })
        .catch(err => {
            console.error("Ошибка при получении данных:", err)
        })
        .finally(() => {
            setLoading(false);
        })
    }, []);

    const buildSlides = (cars: Car[]) => {
        const slides = [];

        for (let i = 0; i < cars.length && i < maxItems; i += itemsPerSlide) {
            const slideItems = cars.slice(i, i + itemsPerSlide);

            slides.push(
                <div key={`slide-${i}`}>
                <ul style={carouselStyle} className="mainPageCarsList">
                    {slideItems.map((car) => (
                    <li key={car.id} className="mainPageCarsList__item">
                        <MainAutoCard
                        carId={car.id}
                        pathToImage={car.pathToImage}
                        price={car.price}
                        title={`${car.brand} ${car.model}`}
                        location={car.locationCity}
                        year={car.year}
                        />
                    </li>
                    ))}
                </ul>
                </div>
            );
        }

        return slides;
    };

    return (
        <div>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: "#000", 
                        colorLink: "#000",
                        colorLinkHover: "#000",
                        colorText: "#000",
                        
                    },
                    components: {
                    Carousel: {
                        colorBgContainer: "#000",
                        fontSize: 16
                    },
                    },
                }}
            >
            <main className='main'>
               
                <PageTitle pageName={"Главная"} withLocation/>

                <Carousel fade arrows autoplay autoplaySpeed={5000}>
                    {buildSlides(carFakeData)}
                </Carousel>
                
                <FindAutoForm />
                {
                    loading 
                    ? <WarningCard message='Загрузка...' />
                    :<Carousel fade arrows autoplay autoplaySpeed={5000}>
                        {buildSlides(backendCars)}
                    </Carousel>
                }
                
            </main>
            </ConfigProvider>
        </div>
    );
}

export default MainPage;
