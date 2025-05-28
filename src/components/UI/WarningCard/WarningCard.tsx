import React from 'react';
import classes from "./WarningCard.module.scss";
import { Spin } from 'antd';

const WarningCard = ({message}: {message: string}) => {
    return (
        <div>
            <div className={classes.warning}>   
                <div className={classes.warning__container}>
                    <p className={classes.warning__message}>{message}</p>
                    <div className={classes.warning__icon}>
                        <Spin />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WarningCard;
