import React, { useEffect, useState } from 'react';
import FindAutoForm from '../../components/UI/FindAutoForm/FindAutoForm';
import AutoCard from '../../components/UI/AutoCard/AutoCard';
import PageTitle from '../../components/UI/PageTitle/PageTitle';
import { useLocation } from 'react-router-dom';
import { DataToSearchProps } from '../../types/DataToSearchProps';
import { carFakeData } from '../../fakeData/carData';
import ErrorCard from '../../components/UI/ErrorCard/ErrorCard';
import { Pagination } from 'antd';
import classes from "./Autos.module.scss";

const Autos = () => {
    let [filteredAutoIDs, setFilteredAutoIDs] = useState<number[]>([])
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const currentPageIDs = filteredAutoIDs.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

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
        let novelty = query.get('novelty') || '';

        const parametersToSearch: DataToSearchProps = {
            selectedBrand: brand,
            selectedModel: model,
            selectedGearBox: gearbox,
            selectedEngine: engine,
            priceFrom: priceFrom,
            priceTo: priceTo,
            yearFrom: yearFrom,
            yearTo: yearTo,
            novelty: novelty,
        }

        const filtered = carFakeData.filter(car => {
            const formattedBrand = car.brand.replaceAll(" ", "").toLocaleLowerCase();
            const formattedModel = car.model.replaceAll(" ", "").toLocaleLowerCase();
            const formattedEngine = getNormalEngineType(car.engineType.replaceAll(" ", ""));
            const formattedGearbox = getNormalGearboxType(car.gearBoxType.replaceAll(" ", "").toLocaleLowerCase());
            if (novelty === "allcars")  {
                novelty = "";
            }
                

            return (
            (!brand || formattedBrand === brand) &&
            (!model || formattedModel === model) &&
            (!engine || formattedEngine === engine) &&
            (!gearbox || formattedGearbox === gearbox) &&
            (!novelty || car.novelty === novelty) &&
            (!priceFrom || car.price >= priceFrom) &&
            (!priceTo || car.price <= priceTo) &&
            (!yearFrom || car.year >= yearFrom) &&
            (!yearTo || car.year <= yearTo)
            );
        });

        setFilteredAutoIDs(filtered.map(car => car.id));
        setCurrentPage(1); 
    }, [useLocation().search]);

    return (
        <main className={classes.main}>
            <PageTitle withLocation pageName={"Автомобили"}/>

            <FindAutoForm />
        
            <p className={classes.adFound__title}>Нашлось объявлений: {filteredAutoIDs.length}</p>

            <ul className={classes.autosList}>
                { 
                    currentPageIDs.map((carId) => (
                        <li key={carId} className={classes.autolist__item}>
                        <AutoCard carId={carId} />
                        </li>
                    ))
                }
                {
                    filteredAutoIDs.length == 0 && <ErrorCard errorMessage='По вашему запросу ничего не найдено!'/>
                }
            </ul>
            <Pagination
                align='center'
                current={currentPage}
                pageSize={itemsPerPage}
                total={filteredAutoIDs.length}
                onChange={handlePageChange}
                style={{ textAlign: 'center', marginTop: 20 }}
            />
            
        </main>
    );
}

export default Autos;
