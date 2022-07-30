import React from 'react';
import './../css/webapp.css'
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import Http from "../libs/trackBusApi";
import { Link } from 'react-router-dom';
//import Routes from '../components/routes';

class TrackMaps extends React.Component {
    state = {
        title: '',
        routes: [],
        setSignalsState: [],
        selectedRoute: '',
    }

    componentDidMount = () => {
        this.getData();
    };

    getData = async () => {
        const response = await Http.get_routes();
        this.setState({ routes: response });
    };

    getSignals = async (name) => {
        console.log(name);
        const response = await Http.get_signals(name);
        console.log(response);
        this.setState({ setSignalsState: response, selectedRoute: name });
    };

    render() {
        return (
            <React.Fragment>
                <div className='map-container'>
                    <nav>
                        <div className="nav-wrapper">
                            <img src={process.env.PUBLIC_URL + "images/logo.png"} className="logo" alt="logo" />
                            <a href="/" className="brand-logo">Track Bus</a>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><a href="/feedback">Feedback</a></li>
                            </ul>
                        </div>
                    </nav>
                    <Map className="maps"
                        google={this.props.google}
                        zoom={12}
                        style={{ width: '80%', height: '89%', position: 'relative' }}
                        initialCenter={{ lat: 28.6575657, lng: -106.084936 }}>
                        {this.state.setSignalsState.map((marker) => {
                            return <Marker key={marker.spoted_at}
                                position={{ lng: marker.cordinates_y, lat: marker.cordinates_x }} />
                        })}
                    </Map>
                    <div className="menu-routes">
                        <div className="menu-routes-title">
                            <h5 style={{ color: '#fff' }}>Bus Stops</h5>
                        </div>
                        <div className="collection col s4 contenedor">
                            {this.state.routes.map((route) => {
                                return <Link className="collection-item" key={route.name} to={'#!'} onClick={() => this.getSignals(route.name)}>
                                    {route.name}
                                </Link>
                            })}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDQ0hak9HMuVbNpwzx_91uLYLuLRiCXvUA'
})(TrackMaps);