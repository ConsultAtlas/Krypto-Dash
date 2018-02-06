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
            <div className="row">
                <div className="col s12 m7">
                    <div className="card">
                        <div className="card-image">
                            <img src="https://s3.amazonaws.com/dcmedia3412/images/siacoin.jpg" />
                            <span className="card-title">Card Title</span>
                        </div>
                        <div className="card-content">
                            <p>I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.</p>
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

// function mapStateToProps({ auth }) {
//     return { auth };
// }

export default Sia;