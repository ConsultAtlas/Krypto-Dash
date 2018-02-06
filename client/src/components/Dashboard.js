import React from 'react';
import Bitcoin from './coins/Bitcoin';
import Ethereum from './coins/Ethereum';
import Sia from './coins/Sia';


const Dashboard = () => {
    return(
        <div>
            <Bitcoin />
            <Ethereum />
            <Sia />
        </div>
    );
};

export default Dashboard;