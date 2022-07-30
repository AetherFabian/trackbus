import './../css/index.css'
import { Link } from 'react-router-dom';
import React from 'react';

const MainPage = () => {
    return (
        <div>
            <nav>
                <div className="nav-wrapper">
                    <img src={process.env.PUBLIC_URL + "images/logo.png"} className="logo responsive-img" alt="logo" />
                    <React.Fragment><Link to={'/'} className="brand-logo">Track Bus</Link></React.Fragment>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><React.Fragment><Link to={'/feedback'}>Feedback</Link></React.Fragment></li>
                    </ul>
                </div>
            </nav>

            <div className="row valign-wrapper">
                <div className="col s6">
                    <div className="card blue-grey darken-1 center-align">
                        <div className="card-content white-text">
                            <span className="card-title">Who are we?</span>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                Sunt consequatur ad architecto vero maiores harum neque
                                perspiciatis amet fuga tempore impedit reiciendis animi aliquam
                                quia recusandae aperiam, doloremque, iusto tempora.
                            </p>
                        </div>
                        <div className="card-action ">
                            <div className="col s2"></div>
                            <a href="https://play.google.com" className="valign-wrapper" target="_blank" rel="noreferrer">
                                <img src={process.env.PUBLIC_URL + "images/icons8-tienda-de-juegos-48.png"} alt="play store" />
                                We are also avalaible on Google Store </a>
                            <div className="col s2"></div>
                        </div>
                    </div>
                </div>
                <div className="section no-pad-bot col s6" id="index-banner">
                    <h1 className="header center orange-text">Track Bus</h1>
                    <div className="row center">
                        <h5 className="header light">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Placeat debitis ducimus itaque repellendus fugit.
                            Eligendi esse accusantium debitis aspernatur, dolorum
                            maiores perspiciatis laboriosam suscipit, architecto
                            ipsum, consectetur facere odit veritatis!</h5>
                    </div>
                    <div className="row center">
                        <React.Fragment><Link to={'/map'} id="download-button" className="btn-large waves-effect waves-light orange">Our web app</Link></React.Fragment>
                    </div>
                </div>
            </div>


            <footer className="page-footer ">
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <h5 className="white-text">Footer Content</h5>
                            <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer
                                content.
                            </p>
                        </div>
                        <div className="col l4 offset-l2 s12">
                            <h5 className="white-text">Links</h5>
                            <ul>
                                <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        © 2014 Copyright Text
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default MainPage;