import React from 'react';
import "./PageTitle.scss"

const PageTitle = ({pageName, withLocation = false}: {pageName: String, withLocation?: Boolean}) => {
    return (
        <div className='title-container'>
            <h1 className='title-container__title'>{pageName}</h1>
            {
                withLocation 
                    ? 
                    <div className='title-container__location'>
                        <img 
                            className='title-container__location-pin'
                            src='/location-pin.svg'
                            alt='местоположение'
                            width={28}
                            height={28}
                        />
                        <p className='title-container__location-title'>Москва</p>
                    </div>
                    : <></>
            }
        </div>
    );
}

export default PageTitle;
