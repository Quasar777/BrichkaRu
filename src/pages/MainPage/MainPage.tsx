import React, { JSX } from 'react';
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

const maxItems = 30;
const itemsPerSlide = 3;

const slicedCars = carFakeData.slice(0, maxItems); // берём максимум 30 объявлений
const slides: JSX.Element[] = [];

for (let i = 0; i < slicedCars.length; i += itemsPerSlide) {
  const slideItems = slicedCars.slice(i, i + itemsPerSlide);

  slides.push(
    <div key={`slide-${i / itemsPerSlide}`}>
      <ul style={carouselStyle} className="mainPageCarsList">
        {slideItems.map((carInfo) => (
          <li key={carInfo.id} className="mainPageCarsList__item">
            <MainAutoCard
              carId={carInfo.id}
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
  );
}

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
                    {slides}
                </Carousel>
                
                <FindAutoForm />

                <Carousel fade arrows autoplay autoplaySpeed={5000}>
                    {slides}
                </Carousel>
            </main>
            </ConfigProvider>
        </div>
    );
}

export default MainPage;
