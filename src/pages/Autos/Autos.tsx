import React, { useEffect, useState } from 'react';
import FindAutoForm from '../../components/UI/FindAutoForm/FindAutoForm';
import AutoCard from '../../components/UI/AutoCard/AutoCard';
import "./Autos.scss";
import PageTitle from '../../components/UI/PageTitle/PageTitle';
import { useLocation } from 'react-router-dom';
import { DataToSearchProps } from '../../types/DataToSearchProps';
import { carFakeData } from '../../fakeData/carData';
import { dealersFakeData } from '../../fakeData/carData';
import { Car } from '../../types/Car';
import ErrorCard from '../../components/UI/ErrorCard/ErrorCard';

const Autos = () => {
    let [filteredAutoIDs, setFilteredAutoIDs] = useState<number[]>([])

    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    };

    function getNormalEngineType(str : string) {
        switch (str) {
            case "бензиновый":
                return 'petrol'
            case "дизельный":
                return 'diesel'
            case "электрический":
                return 'electric'
            case "гибрид":
                return 'hybrid'  
            default:
                return ""  
        }
    }

    function getNormalGearboxType(str : string) {
        switch (str) {
            case "механика":
                return 'mechanical'
            case "автомат":
                return 'automatic'
            case "вариатор":
                return 'variator'
            case "робот":
                return 'robot'  
            default:
                return ""  
        }
    }
    
    const query = useQuery();

    useEffect(() => {
        const brand = query.get('brand') || '';
        const model = query.get('model') || '';
        const engine = query.get('engine') || '';
        const gearbox = query.get('gearbox') || '';
        const priceFrom = Number(query.get('priceFrom')) || 0;
        const priceTo = Number(query.get('priceTo')) || 0;
        const yearFrom = Number(query.get('yearFrom')) || 0;
        const yearTo = Number(query.get('yearTo')) || 0;

        const parametersToSearch: DataToSearchProps = {
            selectedBrand: brand,
            selectedModel: model,
            selectedGearBox: gearbox,
            selectedEngine: engine,
            priceFrom: priceFrom,
            priceTo: priceTo,
            yearFrom: yearFrom,
            yearTo: yearTo,
        }

        const filtered = carFakeData.filter(car => {
            const formattedBrand = car.brand.replaceAll(" ", "").toLocaleLowerCase();
            const formattedModel = car.model.replaceAll(" ", "").toLocaleLowerCase();
            const formattedEngine = getNormalEngineType(car.engineType.replaceAll(" ", ""));
            const formattedGearbox = getNormalGearboxType(car.gearBoxType.replaceAll(" ", "").toLocaleLowerCase());
            
            console.log(formattedGearbox, "VS", gearbox)

            return (
            (!brand || formattedBrand === brand) &&
            (!model || formattedModel === model) &&
            (!engine || formattedEngine === engine) &&
            (!gearbox || formattedGearbox === gearbox) &&
            (!priceFrom || car.price >= priceFrom) &&
            (!priceTo || car.price <= priceTo) &&
            (!yearFrom || car.year >= yearFrom) &&
            (!yearTo || car.year <= yearTo)
            );
        });

        setFilteredAutoIDs(filtered.map(car => car.id))
        console.log("filtered!")
        console.log(filteredAutoIDs);
        
    }, [useLocation().search]);

    return (
        <main className='main'>
            <PageTitle pageName={"Автомобили"}/>

            <FindAutoForm />
        
            <p className='adFound__title'>Нашлось объявлений: {filteredAutoIDs.length}</p>

            <ul className="autosList">
                { 
                    filteredAutoIDs.map((carId) => (
                        <li key={carId} className='autosList__item'>
                             <AutoCard carId={carId} />
                        </li>
                    ))
                }
                {
                    filteredAutoIDs.length == 0 && <ErrorCard errorMessage='По вашему запросу ничего не найдено!'/>
                }
            </ul>
            
        </main>
    );
}

export default Autos;
