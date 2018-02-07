import React, { Component } from 'react';
import Bitcoin from './coins/Bitcoin';
import Ethereum from './coins/Ethereum';
import Sia from './coins/Sia';


class Dashboard extends Component {
    
    constructor () {
        super()
            this.state = {
                bitcoinIsHidden: true,
                ethereumIsHidden: true,
                siaIsHidden: true
            }
        };
        toggleBitcoinHidden () {
            this.setState({
                bitcoinIsHidden: !this.state.bitcoinIsHidden
            });
        };
        toggleEthereumHidden () {
            this.setState({
                ethereumIsHidden: !this.state.ethereumIsHidden
            });
        };
        toggleSiaHidden () {
            this.setState({
                siaIsHidden: !this.state.siaIsHidden
            });
        };
    
    render() {
        return(
            <div>
                <div className="divider"></div>
                <div>
                    <h3 className="center" style={{ marginTop: "50px", marginBottom: "75px"}}>Welcome Captain Picard!</h3>
                </div>
                <div className="center" style={{ marginTop: "50px", marginBottom: "75px"}}>
                    <div className="row center-align">
                        <div className="col s4 center">
                            <a onClick={this.toggleBitcoinHidden.bind(this)} className="waves-effect waves-light btn orange large">Bitcoin</a>
                        </div>
                        <div className="col s4 center">
                            <a onClick={this.toggleEthereumHidden.bind(this)} className="waves-effect waves-light btn orange large">Ethereum</a>
                        </div>
                        <div className="col s4 center">
                            <a onClick={this.toggleSiaHidden.bind(this)} className="waves-effect waves-light btn orange large">Sia Coin</a>
                        </div>
                    </div>
                </div>
                {!this.state.bitcoinIsHidden && <Bitcoin />}
                {!this.state.ethereumIsHidden && <Ethereum />}
                {!this.state.siaIsHidden && <Sia />}
            </div>
        );
    }
};

export default Dashboard;