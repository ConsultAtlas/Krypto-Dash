import React from 'react';

const Landing = () => {
    
    return (
        <div>
            <div style={{ textAlign: 'center'}}>
                <img src="https://s3.amazonaws.com/dcmedia3412/images/logo_dark_purple_350.png" alt="Krypto-dash logo" style={{marginTop: '75px', marginBottom: '50px'}}/>
                <h1 style={{marginTop: '0px'}}>
                    Krypto-Dash!
                </h1>
                <h5 style={{marginBottom: '35px'}} >See all of Your Crypto $$$ in One Dashboard!</h5>
                <div className="row center" style={{marginBottom: '60px'}}>
                    <a href="/auth/google" id="download-button" className="btn-large waves-effect waves-light deep-purple pulse">Get Started</a>
                </div>
            </div>

        
            <div className="row" style={{marginBottom: '50px'}}>
                <div className="col s12 m4">
                    <div className="icon-block">
                    <h2 className="center orange-text"><i className=" medium material-icons">flash_on</i></h2>
                    <h5 className="center">Simple</h5>

                    <p className="light">Krypto-Dash is simple and easy to use. Just choose from our supported cryptocurrencies to see real time pricing and sales volumes along with many other great metrics.</p>
                    </div>
                </div>

                <div className="col s12 m4">
                    <div className="icon-block">
                    <h2 className="center orange-text"><i className=" medium material-icons">important_devices</i></h2>
                    <h5 className="center">Always On</h5>

                    <p className="light">Access Krypto-Dash from your desktop, laptop, smart phone, or tablet. Our simple webapp is always available so that you always have the most up to date information on your favorite cryptocurrencies. </p>
                    </div>
                </div>

                <div className="col s12 m4">
                    <div className="icon-block">
                    <h2 className="center orange-text"><i className="medium material-icons">share</i></h2>
                    <h5 className="center">Crowd Sourced</h5>

                    <p className="light">We are always adding more supported cryptocurrencies and we choose each supported coin by communty vote. If you have a cryptocurrency you want supported by Krypto-Dash, just complete our simple form in your user dashboard and your vote will be heard!</p>
                    </div>
                </div>
            </div>
        

        
    </div>
    );
};

export default Landing;