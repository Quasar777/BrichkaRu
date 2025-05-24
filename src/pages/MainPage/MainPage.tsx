import React from 'react';
import MainAutoCard from '../../components/UI/MainAutoCard/MainAutoCard';
import FindAutoForm from '../../components/UI/FindAutoForm/FindAutoForm';
import "./MainContent.scss";
import PageTitle from '../../components/UI/PageTitle/PageTitle';
import { title } from 'process';
import { Carousel, ConfigProvider } from 'antd';
import { carFakeData } from '../../fakeData/carData';


const carouselStyle: React.CSSProperties = {
  paddingBottom: 20,
};

const MainPage = () => {
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
                     <div>
                        <ul style={carouselStyle} className='mainPageCarsList'>
                            {carFakeData.slice(0, 3).map(carInfo => (
                                    <li className='mainPageCarsList__item'>
                                        <MainAutoCard
                                            carId={carInfo.id} 
                                            key={carInfo.id}
                                            pathToImage={carInfo.pathToImage}
                                            price={carInfo.price} 
                                            title={`${carInfo.brand} ${carInfo.model}`}
                                            location={carInfo.locationCity}
                                            year={carInfo.year}
                                        />
                                    </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <ul style={carouselStyle} className='mainPageCarsList'>
                            {carFakeData.slice(3).map(carInfo => (
                                    <li className='mainPageCarsList__item'>
                                        <MainAutoCard 
                                            carId={carInfo.id} 
                                            key={carInfo.id}
                                            pathToImage={carInfo.pathToImage}
                                            price={carInfo.price} 
                                            title={`${carInfo.brand} ${carInfo.model}`}
                                            location={carInfo.locationCity}
                                            year={carInfo.year}
                                        />
                                    </li>
                            ))}
                        </ul>
                    </div>
                </Carousel>
                
                <FindAutoForm />

                <Carousel fade arrows autoplay autoplaySpeed={5000}>
                    <div>
                        <ul style={carouselStyle} className='mainPageCarsList'>
                            {carFakeData.slice(0, 3).map(carInfo => (
                                    <li className='mainPageCarsList__item'>
                                        <MainAutoCard
                                            carId={carInfo.id} 
                                            key={carInfo.id}
                                            pathToImage={carInfo.pathToImage}
                                            price={carInfo.price} 
                                            title={`${carInfo.brand} ${carInfo.model}`}
                                            location={carInfo.locationCity}
                                            year={carInfo.year}
                                        />
                                    </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <ul style={carouselStyle} className='mainPageCarsList'>
                            {carFakeData.slice(3).map(carInfo => (
                                    <li className='mainPageCarsList__item'>
                                        <MainAutoCard 
                                            carId={carInfo.id} 
                                            key={carInfo.id}
                                            pathToImage={carInfo.pathToImage}
                                            price={carInfo.price} 
                                            title={`${carInfo.brand} ${carInfo.model}`}
                                            location={carInfo.locationCity}
                                            year={carInfo.year}
                                        />
                                    </li>
                            ))}
                        </ul>
                    </div>
                </Carousel>
            </main>
            </ConfigProvider>
        </div>
    );
}

export default MainPage;
