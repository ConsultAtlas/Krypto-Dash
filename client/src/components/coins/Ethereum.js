import React, { Component } from 'react';


class Ethereum extends Component {
    
    render () {
    
        return (
           
                <div className="col s12 m7">
                    <div className="card horizontal">
                    <div className="card-image">
                        <img src="https://s3.amazonaws.com/dcmedia3412/images/ethereum_150.png" />
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                        <h5 className="header">Ethereum (ETH)</h5>
                        <p style={{fontWeight: "600"}}>$0.021855 USD (17.66%)</p>
                        <p>0.00000288 BTC (9.68%)</p>
                        </div>
                        <div className="card-action">
                        <a href="#">This is a link</a>
                        </div>
                    </div>
                    </div>
                </div>
            )
    }
}


export default Ethereum;