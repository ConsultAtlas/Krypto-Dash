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
                    <a href="/auth/google" id="download-button" className="btn-large waves-effect waves-light deep-purple">Get Started</a>
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
        

        <footer className="page-footer deep-purple">
            <div className="container">
            <div className="row">
                <div className="col l6 s12">
                    <h5 className="white-text">Company Bio</h5>
                    <p className="grey-text text-lighten-4">Krypto-Dash is developed by <a href="www.zacharyaten.com">Zachary Aten</a>. It is his capstone project from his <a href="https://www.digitalcrafts.com/full-stack-flex.html">Full Stack Flex Software Development Bootcamp</a> run by <a href="https://www.digitalcrafts.com/">DigitalCrafts</a>.</p>
                </div>
                <div className="col l3 s12">
                    <h5 className="white-text"></h5>
                    <ul>
                        <li><a className="white-text" href="#!"></a></li>
                        
                    </ul>
                </div>
                <div className="col l3 s12">
                    <h5 className="white-text">GitHub</h5>
                    <ul>
                        <li><a className="white-text" href="#!">krypto-dash.github.com</a></li>
                        
                    </ul>
                </div>
            </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                Made with <a className="orange-text text-lighten-3" href="http://materializecss.com">Materialize</a>
                </div>
            </div>
        </footer>
    </div>
    );
};

export default Landing;