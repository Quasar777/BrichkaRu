import React, { useState } from 'react';
import "./CreateAdForm.scss"
import { Select, DatePicker, DatePickerProps, InputNumber, InputNumberProps, Radio, Input, Button } from 'antd';
import type { CheckboxGroupProps } from 'antd/es/checkbox';
import { Models, gearboxOptions, brandOptions, carBodyOptions } from '../../../fakeData/carData';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import type { GetProp, UploadProps } from 'antd';
const { TextArea } = Input;

const SteeringWheeloptions: CheckboxGroupProps<string>['options'] = [
  { label: 'Левый', value: 'left' },
  { label: 'Правый', value: 'right' },
];

// логика для правильной конвертации номера
const LATIN_TO_CYRILLIC: Record<string, string> = {
  A: 'А',
  B: 'В',
  E: 'Е',
  K: 'К',
  M: 'М',
  H: 'Н',
  O: 'О',
  P: 'Р',
  C: 'С',
  T: 'Т',
  X: 'Х',
  Y: 'У',
};
const ALLOWED_CYRILLIC = Object.values(LATIN_TO_CYRILLIC);

// логика для элемента Upload (не совсем понятно че к чему тут..)
type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];
const getBase64 = (img: FileType, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result as string));
    reader.readAsDataURL(img);
};
const beforeUpload = (file: FileType) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
};

const CreateAdForm = () => {
    const [selectedBrand, setSelectedBrand] = useState("")
    const [selectedModel, setSelectedModel] = useState("")
    const [modelOptions, setModelOptions] = useState<{ value: string, label: string }[]>([]);
    const [selectedEngine, setSelectedEngine] = useState("")
    const [selectedGearBox, setSelectedGearBox] = useState("")
    const [selectedYear, setSelectedYear] = useState("")
    const [enginePower, setEnginePower] = useState(0)
    const [engineVolume, setEngineVolume] = useState(0)
    const [selectedCarBody, setSelectedCarBody] = useState("")
    const [mileAge, setMileAge] = useState(0)
    const [steeringWheelPosition, setSteeringWheelPosition] = useState("left")
    const [carNumber, setCarNumber] = useState("")
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState<string>("");
    const [description, setDescription] = useState("");
    const [messageApi, contextHolder] = message.useMessage();

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
    };
    const onSelectedGearBoxChange = (value: string) => {
        setSelectedGearBox(value);
    };
    const onSelectedEngineTypeChange = (value: string) => {
        setSelectedEngine(value);
    };
    const onSelectedYearChange: DatePickerProps['onChange'] = (date, dateString) => {
        setSelectedYear(dateString.toString());
    };
    const onEnginePowerChange: InputNumberProps['onChange'] = (value) => {
        setEnginePower(Number(value))
    };
    const onEngineVolumeChange: InputNumberProps['onChange'] = (value) => {
        setEngineVolume(Number(value));
    };
    const onMileAgeChange: InputNumberProps['onChange'] = (value) => {
        setMileAge(Number(value));
    };
    const onSelectedCarBodyChange = (value: string) => {
        setSelectedCarBody(value);
    };
    const handleCarNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.toUpperCase();

        value = value.split('').map((char) => {
        if (LATIN_TO_CYRILLIC[char]) return LATIN_TO_CYRILLIC[char];
        return char;
        }).join('');

        value = value.replace(new RegExp(`[^${ALLOWED_CYRILLIC.join('')}0-9]`, 'g'), '');

        if (value.length > 9) value = value.slice(0, 9);

        setCarNumber(value);
    };
    const handleImgRequest = (options: any) => {
        const { file, onSuccess } = options;
        setLoading(true);
        getBase64(file, (url) => {
        setImageUrl(url);
        setLoading(false);
        onSuccess("ok");
        });
    };
    const showInvalidInputError = () => {
        messageApi.open({
            type: 'error',
            content: 'Заполните все необходимые поля!',
        });
    };
    const onSubmitButtonClick = () => {
        
        const dataToSend = {
            brand: selectedBrand,
            model: selectedModel,
            engineType: selectedEngine,
            gearbox: selectedGearBox,
            year: selectedYear,
            enginePower,
            engineVolume,
            bodyType: selectedCarBody,
            mileage: mileAge,
            steeringWheel: steeringWheelPosition,
            carNumber,
            image: imageUrl, // base64-строка
            description,
        };

        if (!selectedBrand || !selectedModel || !carNumber) {
            showInvalidInputError();
            return;
        }

        console.log("Данные для отправки:", dataToSend);
    }

    const uploadButton = (
        <button style={{ border: 0, background: 'none' }} type="button">
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div style={{ marginTop: 8 }}>Upload</div>
        </button>
    );
    
    return (
        <form className='createAdForm'>
            <div className='createAdForm__item' >
                <p className='createAdForm__item-title createAdForm__item-title--required'>Марка и модель</p>
                <Select
                    className='createAdForm__select createAdForm__input'
                    showSearch
                    placeholder="Марка"
                    value={selectedBrand || undefined}
                    optionFilterProp="label"
                    onChange={onSelectedBrandChange}
                    options={brandOptions}
                />
                <Select
                    className='createAdForm__select createAdForm__input'
                    showSearch
                    placeholder="Модель"
                    value={selectedModel || undefined}
                    optionFilterProp="label"
                    onChange={onSelectedModelChange}
                    options={modelOptions}
                />
            </div>

            <div className='createAdForm__item'>
                <p className='createAdForm__item-title'>Характеристики</p>
                <DatePicker 
                    className='createAdForm__input' 
                    onChange={onSelectedYearChange} 
                    placeholder="Год выпуска" 
                    picker="year" 
                />
                <Select
                    className='createAdForm__select createAdForm__input'
                    placeholder="КПП"
                    value={selectedGearBox || undefined}
                    optionFilterProp="label"
                    onChange={onSelectedGearBoxChange}
                    options={gearboxOptions}
                />
                <Select
                    className='createAdForm__select createAdForm__input'
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
                <InputNumber 
                    className='createAdForm__input'
                    min={1} 
                    max={3000} 
                    placeholder='Мощность двигателя, л.с.' 
                    onChange={onEnginePowerChange} 
                />
                <InputNumber 
                    className='createAdForm__input'
                    min={0} 
                    max={1000} 
                    placeholder='Объем двигателя, л.' 
                    onChange={onEngineVolumeChange} 
                />
                <Select
                    className='createAdForm__select createAdForm__input'
                    placeholder="Кузов"
                    value={selectedCarBody || undefined}
                    optionFilterProp="label"
                    onChange={onSelectedCarBodyChange}
                    options={carBodyOptions}
                />
                <Radio.Group 
                    block 
                    options={SteeringWheeloptions} 
                    onChange={e => setSteeringWheelPosition(e.target.value)}
                    defaultValue="left" 
                    optionType="button"
                    buttonStyle="solid"
                />
            </div>
            
            <div className='createAdForm__item'>
                <p className='createAdForm__item-title'>Пробег</p>
                <InputNumber 
                    className='createAdForm__input'
                    min={0} 
                    max={10000000} 
                    placeholder='км' 
                    onChange={onMileAgeChange} 
                />
            </div>

            <div className='createAdForm__item'>
                <p className='createAdForm__item-title createAdForm__item-title--required'>Гос. номер для проверки автомобиля</p>
                <div className='createAdForm__carNumber-input'>
                    <Input 
                        className='createAdForm__input '
                        value={carNumber}
                        onChange={handleCarNumberChange}
                        placeholder="A000AA00"
                        maxLength={9}
                    />
                </div>
            </div>

            <div className='createAdForm__item'>
                <p className='createAdForm__item-title'>Загрузите фотографию</p>
                <Upload
                    
                    name="carImage"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    beforeUpload={beforeUpload}
                    customRequest={handleImgRequest}
                >
                    {imageUrl ? <img src={imageUrl} alt="Машина" style={{ width: '100%' }} /> : uploadButton}
                </Upload>
                
            </div>
            
            <div className='createAdForm__item'>
                <p className='createAdForm__item-title'>Добавьте описание</p>
                <TextArea 
                    rows={4} 
                    placeholder="Описание" 
                    maxLength={400} 
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
            </div>
            
            {contextHolder}
            <Button className='createAdForm__submitButton' onClick={onSubmitButtonClick} color="default" variant="solid">
                Опубликовать
            </Button>

        </form>
    );
}

export default CreateAdForm;
