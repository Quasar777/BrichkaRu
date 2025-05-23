import React from 'react';
import MainAutoCard from '../../components/UI/MainAutoCard/MainAutoCard';
import FindAutoForm from '../../components/UI/FindAutoForm/FindAutoForm';
import "./MainContent.scss";
import PageTitle from '../../components/UI/PageTitle/PageTitle';
import { title } from 'process';
import { Carousel, ConfigProvider } from 'antd';

const carData = [
    {
        id: 10,
        pathToImage: "https://jetcar24.ru/wp-content/uploads/2024/07/5e7b7c235affe925d9166ba5d24b8fb9.jpg",
        title: "Bugatti Chiron",
        price: 1000000000,
        location: "Балашиха",
        year: 2018
    },
    {
        id: 2,
        pathToImage: "/RangeRover.png",
        title: "Range Rover",
        price: 34999000,
        location: "Мытищи",
        year: 2014
    },
    {
        id: 3,
        pathToImage: "https://classicsworld.co.uk/wp-content/uploads/sites/6/DSC_5982.jpg?w=900",
        title: "Range Rover 2",
        price: 900000,
        location: "Юго западная",
        year: 1980
    },
]
const carData2 = [
    {
        id: 1,
        pathToImage: "https://bluesky.cdn.imgeng.in/cogstock-images/2c170cf5-ff61-4b0a-8f27-8e3ac5557859.jpg?migeng=/w_1200/cmpr_99/",
        title: "Lamborghini Aventador SVJ",
        price: 90_000_000,
        location: "Митино",
        year: 2020
    },
    {
        id: 11,
        pathToImage: "https://s0.rbk.ru/v6_top_pics/media/img/3/47/754788599938473.jpeg",
        title: "Lada Calina",
        price: 599000,
        location: "Великие луки",
        year: 2012
    },
    {
        id: 3,
        pathToImage: "https://media.production.jlrms.com/styles/hero_crop/s3/2024-08-06/image/312d52cd-c83e-4131-b121-cbec328f65c0/RRS_SV_Edition_Two_25MY_01_Nebula_Blue_070824.jpg?VersionId=yW_ZNHltSghBKkN7ekS5PuErVlS4RGrb&h=dfb1210d&itok=3KFjkdZQ",
        title: "Range Rover 2",
        price: 18000000,
        location: "Шоссе энтузиастов",
        year: 2015
    },
]


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
                            {carData.map(carInfo => (
                                    <li className='mainPageCarsList__item'>
                                        <MainAutoCard
                                            carId={carInfo.id} 
                                            key={carInfo.id}
                                            pathToImage={carInfo.pathToImage}
                                            price={carInfo.price} 
                                            title={carInfo.title}
                                            location={carInfo.location}
                                            year={carInfo.year}
                                        />
                                    </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <ul style={carouselStyle} className='mainPageCarsList'>
                            {carData2.map(carInfo => (
                                    <li className='mainPageCarsList__item'>
                                        <MainAutoCard 
                                            carId={carInfo.id} 
                                            key={carInfo.id}
                                            pathToImage={carInfo.pathToImage}
                                            price={carInfo.price} 
                                            title={carInfo.title}
                                            location={carInfo.location}
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
                            {carData.map(carInfo => (
                                    <li className='mainPageCarsList__item'>
                                        <MainAutoCard 
                                            carId={carInfo.id} 
                                            key={carInfo.id}
                                            pathToImage={carInfo.pathToImage}
                                            price={carInfo.price} 
                                            title={carInfo.title}
                                            location={carInfo.location}
                                            year={carInfo.year}
                                        />
                                    </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <ul style={carouselStyle} className='mainPageCarsList'>
                            {carData2.map(carInfo => (
                                    <li className='mainPageCarsList__item'>
                                        <MainAutoCard 
                                            carId={carInfo.id} 
                                            key={carInfo.id}
                                            pathToImage={carInfo.pathToImage}
                                            price={carInfo.price} 
                                            title={carInfo.title}
                                            location={carInfo.location}
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
