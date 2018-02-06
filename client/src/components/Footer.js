import React from 'react';

const Footer = () => {
    return(
        <div>
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

export default Footer;