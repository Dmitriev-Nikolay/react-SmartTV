import React from 'react';

import { Banner } from '../components';

const Home = () => {
    const [isVisibleBanner, setIsVisibleBanner] = React.useState(true);

    return (
        <div className="content">
            <div className="container">
                {
                    isVisibleBanner && <Banner setIsVisibleBanner={ setIsVisibleBanner }/>
                }
            </div>
        </div>
    );
};

export default Home;