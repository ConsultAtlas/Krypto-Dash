import React, { Component } from 'react';


class Bitcoin extends Component {
    
    render () {
        
        return (
            <div class="col s12 m7">
                <div class="card horizontal">
                <div class="card-image">
                    <img src="https://s3.amazonaws.com/dcmedia3412/images/BitcoinLogo_100.png" />
                </div>
                <div class="card-stacked">
                    <div class="card-content">
                    <h5 class="header">Bitcoin (BTC)</h5>
                    <p style={{fontWeight: "600"}}>$0.021855 USD (17.66%)</p>
                    <p>0.00000288 BTC (9.68%)</p>
                    </div>
                    <div class="card-action">
                    <a href="#">This is a link</a>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}


export default Bitcoin;