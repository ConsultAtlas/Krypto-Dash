import React from 'react';
import Bitcoin from './coins/Bitcoin';
import Ethereum from './coins/Ethereum';
import Sia from './coins/Sia';


const Dashboard = () => {
    return(
        <div>
            <div className="wrapper">
                <a className="waves-effect waves-light btn orange left">Bitcoin</a>
                <a className="waves-effect waves-light btn orange center-align">Ethereum</a>
                <a className="waves-effect waves-light btn orange right">Sia Coin</a>
            </div>
            <Bitcoin />
            <Ethereum />
            <Sia />
        </div>
    );
};

export default Dashboard;