import React from "react";
import popupStyles from "../css/custom-popup.module.css";
import { SignalsComp } from "./showSignals";

const ShowSignal = (props) => {

    return (
        <div className={popupStyles.popup}>

            <h2>{props.title + ' - ' + props.nameStop}</h2>

            <span className={popupStyles.close} onClick={props.close}>
                &times;
            </span>

            <button className={popupStyles.change} onClick={props.handler}>Show all stops logs</button>

            <div className={popupStyles.content}>{props.signals.map((signal) => {
                if (props.nameStop === signal.name_stop) {
                    return <SignalsComp
                            key={signal.cordinates_x}
                            text={'Was seen at: ' + signal.spoted_at}
                    />
                }
                return null;
            })} </div>
        </div>
    );
}

export default ShowSignal;