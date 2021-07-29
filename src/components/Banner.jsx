import React from 'react';

import arrowDown from '../assets/svg/down-arrow.svg';

const Banner = ({ setIsVisibleBanner }) => {

    return (
        <div className="banner">
            <p className="banner__title">
                Тыкай.
                Сюда.
                Без вопросов.
            </p>
            <img src={ arrowDown } alt="arrow" width="50" height="100"/>
            <button className="banner__btn-get-offer"onClick={ () => setIsVisibleBanner(false) }>GO оформлять</button>
        </div>
    );
};

export default Banner;