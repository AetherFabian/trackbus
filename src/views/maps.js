import React from 'react';
import './../css/webapp.css'
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import Http from "../libs/trackBusApi";
import { Link } from 'react-router-dom';
//import Routes from '../components/routes';

class TrackMaps extends React.Component {
    state = {
        title: 'Track Bus',
        routes: [],
        setSignalsState: [],
        selectedRoute: '',
        activateMarker: null,
        time: '',
    }

    componentDidMount = () => {
        this.getData();
        //this.timer();
    };

    getData = async () => {
        const response = await Http.get_routes();
        this.setState({ routes: response });
    };

    getSignals = async (name) => {
        if (name !== '') {
            const response = await Http.get_signals(name);
            this.setState({ setSignalsState: response, selectedRoute: name });
        }
    }

    /*handleActiveMarker = (marker) => {
        if (marker === this.state.activateMarker) {
            return;
        }
        this.setState({ activateMarker: marker });
        return (<InfoWindow children={marker.cordinates_x} onCloseClick={() => this.setState({ activateMarker: null })}>
            {marker.spoted_at}
                </InfoWindow>);
    };*/

    timer = () => {
        setTimeout(() => {
            this.getSignals(this.state.selectedRoute);
            this.timer();
        }, 20000);
    };

    timeWatch = () => {
        const date = new Date();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const second = date.getSeconds();
        const time = `${hour}:${minute}:${second}`;
        this.setState({time: time});
        console.log(this.time);
        this.timeWatch();
    }


    mapStyles =
        [{
            featureType: "all",
            elementType: "labels",
            stylers: [
                { visibility: "off" }
            ]
        },
        {
            featureType: "road",
            elementType: "labels",
            stylers: [
                { visibility: "on" }
            ]
        },
        {
            featureType: "administrative",
            elementType: "labels",
            stylers: [
                { visibility: "on" }
            ]
        }];


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
                        styles={this.mapStyles}
                        style={{
                            width: '80%',
                            height: '89%',
                            position: 'relative',
                        }
                        }
                        onClick={() => this.setState({ activateMarker: null })}
                        initialCenter={{ lat: 28.6575657, lng: -106.084936 }}>
                        {this.state.setSignalsState.map((marker) => {
                            return <Marker key={marker.spoted_at}
                                position={{ lng: marker.cordinates_y, lat: marker.cordinates_x }}
                                icon={{
                                    url: process.env.PUBLIC_URL + "images/marker.png",
                                    size: new this.props.google.maps.Size(35, 50),
                                    scaledSize: new this.props.google.maps.Size(35, 50),
                                }}
                                label={{
                                    text: this.timeWatch(marker),
                                    color: '#fff',
                                    fontSize: '12px',
                                    fontWeight: '10',
                                }}
                                animation={this.props.google.maps.Animation.DROP}
                                onClick={(e) => this.handleActiveMarker(marker, e)}
                            >
                            </Marker>
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