import React, { Component } from 'react';


class Sia extends Component {
    // renderContent() {
    //     switch (this.props.auth) {
    //         case null:
    //             return;
    //         case false:
    //             return (
    //                 <li><a href="/auth/google">Login with Google</a></li>
    //             );
    //         default: 
    //             return (
    //                 <li><a href="/api/logout">Logout</a></li>
    //             );
    //     }
    // }
    
    render () {
        
        return (
            <div class="col s12 m7">
                    <div class="card horizontal">
                    <div class="card-image">
                        <img src="https://s3.amazonaws.com/dcmedia3412/images/siacoin_150.jpg" />
                    </div>
                    <div class="card-stacked">
                        <div class="card-content">
                        <h5 class="header">Sia Coin (SC)</h5>
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

// function mapStateToProps({ auth }) {
//     return { auth };
// }

export default Sia;