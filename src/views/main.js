import './../css/index.css'
import { Link } from 'react-router-dom';
import React from 'react';

const MainPage = () => {
    return (
        <body>
            <nav>
                <div class="nav-wrapper">
                    <img src={process.env.PUBLIC_URL + "images/logo.png"} class="logo responsive-img" alt="logo" />
                    <React.Fragment><Link to={'/'} class="brand-logo">Track Bus</Link></React.Fragment>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><React.Fragment><Link to={'/feedback'}>Feedback</Link></React.Fragment></li>
                    </ul>
                </div>
            </nav>

            <div class="row valign-wrapper">
                <div class="col s6">
                    <div class="card blue-grey darken-1 center-align">
                        <div class="card-content white-text">
                            <span class="card-title">Who are we?</span>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                Sunt consequatur ad architecto vero maiores harum neque
                                perspiciatis amet fuga tempore impedit reiciendis animi aliquam
                                quia recusandae aperiam, doloremque, iusto tempora.
                            </p>
                        </div>
                        <div class="card-action ">
                            <div class="col s2"></div>
                            <a href="https://play.google.com" class="valign-wrapper" target="_blank" rel="noreferrer">
                                <img src={process.env.PUBLIC_URL + "images/icons8-tienda-de-juegos-48.png"} alt="play store" />
                                We are also avalaible on Google Store
                            </a>
                            <div class="col s2"></div>
                        </div>
                    </div>
                </div>
                <div class="section no-pad-bot col s6" id="index-banner">
                    <h1 class="header center orange-text">Track Bus</h1>
                    <div class="row center">
                        <h5 class="header light">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Placeat debitis ducimus itaque repellendus fugit.
                            Eligendi esse accusantium debitis aspernatur, dolorum
                            maiores perspiciatis laboriosam suscipit, architecto
                            ipsum, consectetur facere odit veritatis!</h5>
                    </div>
                    <div class="row center">
                        <React.Fragment><Link to={'/map'} id="download-button" class="btn-large waves-effect waves-light orange">Our web app</Link></React.Fragment>
                    </div>
                </div>
            </div>


            <footer class="page-footer ">
                <div class="container">
                    <div class="row">
                        <div class="col l6 s12">
                            <h5 class="white-text">Footer Content</h5>
                            <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer
                                content.
                            </p>
                        </div>
                        <div class="col l4 offset-l2 s12">
                            <h5 class="white-text">Links</h5>
                            <ul>
                                <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer-copyright">
                    <div class="container">
                        © 2014 Copyright Text
                    </div>
                </div>
            </footer>
        </body>
    );
}

export default MainPage;