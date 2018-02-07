import React, { Component } from 'react';
import axios from 'axios';

const URL = 'https://api.coinmarketcap.com/v1/ticker/ethereum/';

class Ethereum extends Component {
    constructor(props) {
        super(props);
    
        // Start with no response available
        this.state = { data: [] }; 
      }
    
      // Waits the component to be rendered before calling API
      componentDidMount() {
        axios.get(URL).then(response => {
            // Updates the state with the response
            this.setState({ ethereum_price: response.data[0].price_usd })
            this.setState({ ethereum_percent_change_24h: response.data[0].percent_change_24h })
            this.setState({ price_btc: response.data[0].price_btc })
            console.log(this.state);
        });
      }

    render () {
    
        return (
           
                <div className="col s12 m7">
                    <div className="card horizontal">
                    <div className="card-image">
                        <img src="https://s3.amazonaws.com/dcmedia3412/images/ethereum_150.png" alt="ethereum logo"/>
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                        <h5 className="header">Ethereum (ETH)</h5>
                        <p style={{fontWeight: "600"}}>${this.state.ethereum_price} USD ({this.state.ethereum_percent_change_24h}%)</p>
                        <p>{this.state.price_btc} BTC</p>
                        </div>
                        <div className="card-action">
                        <a href="https://coinmarketcap.com/currencies/ethereum/">CoinMarketCap</a>
                        </div>
                    </div>
                    </div>
                </div>
            )
    }
}


export default Ethereum;