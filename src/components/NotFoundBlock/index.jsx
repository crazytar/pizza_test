import React from 'react';
import styles from './NotFoundBlock.module.scss';

const NotFoundBlock = () => {
    return (
        <div className={styles.root}>
            <h1 >
                <span>😕</span>
                <br />
                К сожалению ничего не найдено
            </h1>
            <p>Попробуйте изменить парметры поиска</p>
        </div>
    );
}

export default NotFoundBlock;
