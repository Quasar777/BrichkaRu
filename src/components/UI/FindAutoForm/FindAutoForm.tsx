import React from 'react';
import "./FindAutoForm.scss"
import { Select } from 'antd';

const FindAutoForm = () => {
    return (
        <form className='filterForm'>
            <div className="filterForm__tabs">
                <button type="button" className="filterForm__tab filterForm__tab--active">Все</button>
                <button type="button" className="filterForm__tab">Новые</button>
                <button type="button" className="filterForm__tab">Б/У</button>
            </div>

            <div className="filterForm__fields">
                <Select options={[{ value: 'sample', label: <span>sample</span> }]} />

                <input type="text" className="filterForm__input" placeholder="Модель" />
                <input type="text" className="filterForm__input" placeholder="КПП" />

                <input type="number" className="filterForm__input" placeholder="Цена от, ₽" />
                <input type="number" className="filterForm__input" placeholder="до" />

                <input type="number" className="filterForm__input" placeholder="Год от" />
                <input type="number" className="filterForm__input" placeholder="до" />

                <input type="text" className="filterForm__input" placeholder="Тип двигателя" />
            </div>

            <button type="submit" className="filterForm__submit">Найти</button>
        </form>
    );
}

export default FindAutoForm;
