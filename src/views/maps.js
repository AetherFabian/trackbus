import React from 'react';
import './../css/webapp.css'
import { Map, GoogleApiWrapper } from "google-maps-react";

class TrackMaps extends React.Component {

    render() {
        return (
            <div class='map-container'>
                <nav>
                    <div class="nav-wrapper">
                        <img src={process.env.PUBLIC_URL + "images/logo.png"} class="logo" alt="logo" />
                        <a href="/" class="brand-logo">Track Bus</a>
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                            <li><a href="/feedback">Feedback</a></li>
                        </ul>
                    </div>
                </nav>
                <Map className="maps"
                    google={this.props.google}
                    zoom={13}
                    style={{ width: '80%', height: '89%', position: 'relative' }}
                    initialCenter={{ lat: 28.6575657, lng: -106.084936 }} />
                <div class="menu-routes">
                    <div class="menu-routes-title">
                        <h5 style={{color:'#fff'}}>Bus Stops</h5>
                    </div>
                    <div class="collection col s4 contenedor">
                        <a href="#!" class="collection-item">Ruta 1</a>
                        <a href="#!" class="collection-item"><span class="new badge">4</span>Ruta 2</a>
                        <a href="#!" class="collection-item">Ruta 3</a>
                        <a href="#!" class="collection-item">Ruta 4</a>
                        <a href="#!" class="collection-item">Ruta 5</a>
                        <a href="" class="collection-item">Ruta 6</a>
                        <a href="" class="collection-item">Ruta 7</a>
                        <a href="" class="collection-item">Ruta 8</a>
                        <a href="" class="collection-item">Ruta 9</a>
                        <a href="" class="collection-item">Ruta 9</a>
                        <a href="" class="collection-item">Ruta 9</a>
                        <a href="" class="collection-item">Ruta 9</a>
                        <a href="" class="collection-item">Ruta 9</a>
                        <a href="" class="collection-item">Ruta 9</a>
                        <a href="" class="collection-item">Ruta 9</a>
                        <a href="" class="collection-item">Ruta 9</a>
                        <a href="" class="collection-item">Ruta 9</a>
                        <a href="" class="collection-item">Ruta 9</a>
                        <a href="" class="collection-item">Ruta 9</a>
                        <a href="" class="collection-item">Ruta 9</a>
                        <a href="" class="collection-item">Ruta 9</a>
                        <a href="" class="collection-item">Ruta 9</a>
                        <a href="" class="collection-item">Ruta 9</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDQ0hak9HMuVbNpwzx_91uLYLuLRiCXvUA'
})(TrackMaps);