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
            <div style={{ marginBottom: "75px"}}>
                <div className="divider"></div>
                <div>
                    <h3 className="center" style={{ marginTop: "50px", marginBottom: "75px"}}>Welcome to Krypto-Dash!</h3>
                    <h6 className="center">Click the buttons below to see current pricing and 24H percent change for your favorite cryptocurencies.</h6>
                </div>
                <div className="center" style={{ marginTop: "50px", marginBottom: "75px"}}>
                    <div className="row center-align">
                        <div className="col s4 center">
                            <a onClick={this.toggleBitcoinHidden.bind(this)} className="waves-effect waves-light btn orange large">Bitcoin</a>
                        </div>
                        <div className="col s4 center">
                            <a onClick={this.toggleEthereumHidden.bind(this)} className="waves-effect waves-light btn orange large">Ether</a>
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