import React from 'react';
import './../css/webapp.css'
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import Http from "../libs/trackBusApi";
import { Link } from 'react-router-dom';
import CustomPopup from '../components/portal';
//import Routes from '../components/routes';

class TrackMaps extends React.Component {
    state = {
        title: 'Track Bus',
        routes: [],
        setSignalsState: [],
        selectedRoute: '',
        activateMarker: null,
        visibility: false,
        buttonVisibility: false,
        timer: new Date().getTime(),
    }

    popupCloseHandler = (e) => {
        this.setState({ visibility: e });
    };


    handleToggleOpen = (marker) => {
        this.setState({ visibility: !this.state.visibility, activateMarker: marker });
    }

    componentDidMount = () => {
        this.getData();
        this.timeID = setInterval(() => {
            this.setState({ timer: new Date().getTime() });
        }, 1000);
    }

    getData = async () => {
        const response = await Http.instance.get_routes();
        this.setState({ routes: response });
    };

    getSignals = async (name) => {
        console.log(name);
        console.log(this.state.selectedRoute);
        if (name !== this.state.selectedRoute) {
            clearTimeout(this.timerID);
        }
        if (name !== '') {
            const response = await Http.instance.get_signals(name);
            this.setState({ setSignalsState: response, selectedRoute: name });
            /*this.timerID = setTimeout(() => {
                this.getSignals(name);
            }, 20000);*/
        }
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
                            <img src={process.env.PUBLIC_URL + "images/logo.png"} className="logo" alt="logo" hrfe="/" />
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
                        }
                        }
                        initialCenter={{ lat: 28.6575657, lng: -106.084936 }}>
                        {this.state.setSignalsState.map((marker) => {
                            return <Marker
                                key={marker.spoted_at}
                                position={{ lng: marker.cordinates_y, lat: marker.cordinates_x }}
                                icon={{
                                    url: process.env.PUBLIC_URL + "images/marker.png",
                                    size: new this.props.google.maps.Size(35, 50),
                                    scaledSize: new this.props.google.maps.Size(35, 50),
                                }}
                                label={{
                                   text:`${(parseInt(Math.abs(this.state.timer - new Date(`${new Date().getDate()} ${marker.spoted_at}`).getTime()) / (1000 * 60) % 60)).toString().length === 2 ? parseInt(Math.abs(this.state.timer - new Date(`${new Date().getDate()} ${marker.spoted_at}`).getTime()) / (1000 * 60) % 60):
                                        `0${parseInt(Math.abs(this.state.timer - new Date(`${new Date().getDate()} ${marker.spoted_at}`).getTime()) / (1000 * 60) % 60)}`
                                        }:${(parseInt(Math.abs(this.state.timer - new Date(`${new Date().getDate()} ${marker.spoted_at}`).getTime()) / (1000) % 60)).toString().length === 2 ? parseInt(Math.abs(this.state.timer - new Date(`${new Date().getDate()} ${marker.spoted_at}`).getTime()) / (1000) % 60):
                                        `0${parseInt(Math.abs(this.state.timer - new Date(`${new Date().getDate()} ${marker.spoted_at}`).getTime()) / (1000) % 60)}`}`,
                                    color: '#fff',
                                    fontSize: '12px',
                                    fontWeight: '10',
                                }}
                                onClick={() => this.handleToggleOpen(marker)}
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
                                return <Link className="collection-item" key={route.bus_id} to={'#!'} onClick={() => this.getSignals(route.bus_name)}>
                                    {route.bus_name} 
                                </Link>
                            })}
                        </div>
                    </div>
                    {this.state.visibility === true ? <CustomPopup
                        onClose={this.popupCloseHandler}
                        show={this.state.visibility}
                        showButton={this.state.buttonVisibility}
                        title={this.state.selectedRoute}
                        signals={this.state.setSignalsState}
                        nameStop={this.state.activateMarker.name_stop}/> : null}
                </div>
            </React.Fragment>
        );
    }

}


export default GoogleApiWrapper({
    apiKey: 'AIzaSyDQ0hak9HMuVbNpwzx_91uLYLuLRiCXvUA'
})(TrackMaps);