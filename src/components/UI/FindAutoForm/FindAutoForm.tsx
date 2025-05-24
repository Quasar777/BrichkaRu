import React, { useState, useEffect } from 'react';
import "./FindAutoForm.scss"
import { Select, Button, ConfigProvider, Radio, InputNumber, InputNumberProps } from 'antd';
import type { CheckboxGroupProps } from 'antd/es/checkbox';
import { useNavigate, useLocation } from 'react-router-dom';

const options: CheckboxGroupProps<string>['options'] = [
  { label: 'Все', value: 'allCars' },
  { label: 'Новые', value: 'newCars' },
  { label: 'Б/У', value: 'usedCars' },
];

let Models = {
        lada: [
            "Priora",
            "Vesta"
        ],
        porsche: [
            "Cayene",
            "Panamera"
        ],
        rangeRover: [
            "Range Rover Land Rover",
            "Range Rover Sport"
        ]
    }

const FindAutoForm = () => {

    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    };

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

        setSelectedBrand(brand);
        setSelectedModel(model);
        setSelectedEngine(engine);
        setSelectedGearBox(gearbox);
        setPriceFrom(priceFrom);
        setPriceTo(priceTo);
        setYearFrom(yearFrom);
        setYearTo(yearTo);


        if (brand) {
            const modelsForBrand = Models[brand as keyof typeof Models] || [];
            const formattedOptions = modelsForBrand.map(model => ({
            value: model.toLowerCase().replace(/\s+/g, ''),
            label: model
            }));
            setModelOptions(formattedOptions);
        }
    }, []);

    const [selectedBrand, setSelectedBrand] = useState("")
    const [selectedModel, setSelectedModel] = useState("")
    const [selectedEngine, setSelectedEngine] = useState("")
    const [selectedGearBox, setSelectedGearBox] = useState("")
    const [priceFrom, setPriceFrom] = useState(0);
    const [priceTo, setPriceTo] = useState(0);
    const [yearFrom, setYearFrom] = useState(0);
    const [yearTo, setYearTo] = useState(0);
    const [modelOptions, setModelOptions] = useState<{ value: string, label: string }[]>([]);
    const navigate = useNavigate();

    
    const onSelectedBrandChange = (value: string) => {
        setSelectedBrand(value);
        console.log("Марка: " + value);

        const modelsForBrand = Models[value as keyof typeof Models] || [];

        const formattedOptions = modelsForBrand.map(model => ({
            value: model.toLowerCase().replace(/\s+/g, ''), 
            label: model
        }));

        setModelOptions(formattedOptions);
        setSelectedModel(""); 
    };
    const onSelectedModelChange = (value: string) => {
        setSelectedModel(value);
        console.log("Модель: " + value);
    };
    const onSelectedGearBoxChange = (value: string) => {
        setSelectedGearBox(value);
        console.log("КПП: " + value);
    };
    const onSelectedEngineTypeChange = (value: string) => {
        setSelectedEngine(value);
        console.log("Тип двигателя: " + value);
    };
    const onPriceFromChange: InputNumberProps['onChange'] = (value) => {
    if (typeof value === 'number') {
        setPriceFrom(value);
        console.log("Цена от: " + value);
    } else {
        console.log("Неверное значение начальной цены: ", value);
    }
    };
    const onPriceToChange: InputNumberProps['onChange'] = (value) => {
    if (typeof value === 'number') {
        setPriceTo(value);
        console.log("Цена до: " + value);
    } else {
        console.log("Неверное значение верхней цены: ", value);
    }
    };
    const onYearFromChange: InputNumberProps['onChange'] = (value) => {
    if (typeof value === 'number' && value > 0) {
        setYearFrom(value);
        console.log("Год от: " + value);
    } else {
        console.log("Неверное значение начального года: ", value);
    }
    };
    const onYearToChange: InputNumberProps['onChange'] = (value) => {
    if (typeof value === 'number' && value > 0) {
        setYearTo(value);
        console.log("Год до: " + value);
    } else {
        console.log("Неверное значение верхнего года: ", value);
    }
    };
    
    const onSubmitButtonClick = () => {
        
        const params = new URLSearchParams({
            brand: selectedBrand,
            model: selectedModel,
            engine: selectedEngine,
            gearbox: selectedGearBox,
            priceFrom: priceFrom.toString(),
            priceTo: priceTo.toString(),
            yearFrom: yearFrom.toString(),
            yearTo: yearTo.toString(),
        });

        navigate(`/autos?${params.toString()}`);
    }


    return (
          <ConfigProvider
            theme={{
            
            components: {
                Select: {
                    colorBorder: "transparent",
                    activeBorderColor: "transparent",
                    hoverBorderColor: "transparent",
                    borderRadius: 5,    
                    optionFontSize: 16,
                    fontSize: 16,
                    optionActiveBg: "#fff",
                    optionSelectedBg: "#F9F9F9"
                },
                InputNumber: {
                    activeBorderColor: "transparent",
                    hoverBorderColor: "transparent",
                    borderRadius: 5,    
                    fontSize: 16,
                },
                Radio: {
                    buttonBg: "#000",
                    buttonColor: "#fff",
                    borderRadius: 5,
                    buttonCheckedBg: "#000",
                    buttonSolidCheckedColor: "#FF8C00", // цвет текста активной кнопки
                    buttonSolidCheckedBg: "#000", // фон активной кнопки
                    buttonSolidCheckedHoverBg: "#000", // фон при наведении на активную
                    colorPrimary: "#FF8C00", // общий цвет темы
                    colorPrimaryHover: "#FF8C00", // цвет при ховере
                    colorPrimaryActive: "#FF8C00", // цвет при нажатии
                },
                Button: {
                    paddingInline: 80,
                    fontSize: 16,
                    fontFamily: "Inter",
                    fontWeight: 500
                }
            }
            }}
        >
        <form className='filterForm'>
            <div className="filterForm__tabs">
                {/* ПОКА НЕ РАБОТАЕТ */}
                <Radio.Group
                    className='filterForm__radioGroup'
                    block
                    disabled
                    name='carNovelty'
                    size='large'
                    options={options}
                    defaultValue="allCars"
                    optionType="button"
                    buttonStyle="solid"
                />
                <p style={{color: "red", fontSize: 10, alignContent: 'center', marginLeft: 10}}>Пока не работает</p>
            </div>

            <div className="filterForm__fields">
                
                <Select
                    className='filterForm__select'
                    showSearch
                    placeholder="Марка"
                    value={selectedBrand || undefined}
                    optionFilterProp="label"
                    onChange={onSelectedBrandChange}
                    options={[
                        {
                            value: 'lada',
                            label: 'Лада',
                        },
                        {
                            value: 'porsche',
                            label: 'Porsche',
                        },
                        {
                            value: 'rangeRover',
                            label: 'Range rover',
                        },
                    ]}
                />
                <Select
                    className='filterForm__select'
                    showSearch
                    placeholder="Модель"
                    optionFilterProp="label"
                    onChange={onSelectedModelChange}
                    options={modelOptions}
                    value={selectedModel || undefined}
                />
                <Select
                    className='filterForm__select'
                    showSearch
                    placeholder="КПП"
                    value={selectedGearBox || undefined}
                    optionFilterProp="label"
                    onChange={onSelectedGearBoxChange}
                    options={[
                        {
                            value: 'mechanical',
                            label: 'Механика',
                        },
                        {
                            value: 'automatic',
                            label: 'Автомат',
                        },
                        {
                            value: 'robot',
                            label: 'Роботизированная',
                        },
                        {
                            value: 'variator',
                            label: 'Вариатор',
                        },
                    ]}
                />
                
                <div className='filterForm__shortContainer'>
                    <InputNumber value={priceFrom || undefined} className='filterForm__input' min={1} max={10000000000} placeholder='Цена от, ₽' onChange={onPriceFromChange} />
                    <InputNumber value={priceTo || undefined} className='filterForm__input' min={1} max={10000000000} placeholder='до' onChange={onPriceToChange} />
                </div>
                <div className='filterForm__shortContainer'>
                    <InputNumber value={yearFrom || undefined} className='filterForm__input' min={1000} max={2030} placeholder='Год от' onChange={onYearFromChange} />
                    <InputNumber value={yearTo || undefined} className='filterForm__input' min={1000} max={2030} placeholder='до' onChange={onYearToChange} />
                </div>
                <Select
                    className='filterForm__select'
                    showSearch
                    placeholder="Тип двигателя"
                    value={selectedEngine || undefined}
                    optionFilterProp="label"
                    onChange={onSelectedEngineTypeChange}
                    options={[
                        {
                            value: 'petrol',
                            label: 'Бензиновый',
                        },
                        {
                            value: 'electric',
                            label: 'Электрический',
                        },
                        {
                            value: 'diesel',
                            label: 'Дизельный',
                        },
                        {
                            value: 'hybrid',
                            label: 'гибридный',
                        },
                    ]}
                />
                
            </div>
            <div className='filterForm__buttonContainer'>
                <Button className='filterForm__submitButton' onClick={onSubmitButtonClick} color="default" variant="solid">
                    Найти
                </Button>
            </div>
        </form>
        </ConfigProvider>
    );
}

export default FindAutoForm;
