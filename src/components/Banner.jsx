import React from 'react';
import { Link } from 'react-router-dom';

import arrowDown from '../assets/svg/down-arrow.svg';

const Banner = React.memo(({ setIsVisibleBanner }) => {

    const viewBanner = () => {
        setIsVisibleBanner(false);
    };

    return (
        <div className="banner">
            <p className="banner__title">Тыкай.<br />Сюда.<br />Без вопросов.</p>
            <img src={ arrowDown } alt="arrow" width="50" height="100" />
            <Link to="/order">
                <button className="banner__btn-get-offer" onClick={ viewBanner }>GO оформлять</button>
            </Link>
        </div>
    );
});

export default Banner;