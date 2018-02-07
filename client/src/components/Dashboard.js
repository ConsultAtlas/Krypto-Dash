import React from 'react';
import Bitcoin from './coins/Bitcoin';
import Ethereum from './coins/Ethereum';
import Sia from './coins/Sia';


const Dashboard = () => {
    return(
        <div>
            <div className="divider"></div>
            <div>
                <h3 className="center" style={{ marginTop: "50px", marginBottom: "100px"}}>Welcome Captain Picard!</h3>
            </div>
            <div className="center" style={{ marginTop: "50px", marginBottom: "50px"}}>
                <div className="row center-align">
                    <div className="col s4 center">
                        <a className="waves-effect waves-light btn orange large">Bitcoin</a>
                    </div>
                    <div className="col s4 center">
                        <a className="waves-effect waves-light btn orange large">Ethereum</a>
                    </div>
                    <div className="col s4 center">
                        <a className="waves-effect waves-light btn orange large">Sia Coin</a>
                    </div>
                </div>
            </div>
            <Bitcoin />
            <Ethereum />
            <Sia />
        </div>
    );
};

export default Dashboard;