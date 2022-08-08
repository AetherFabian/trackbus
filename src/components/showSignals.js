import React from "react";
import popupStyles from "../css/custom-popup.module.css";

const ShowSignals = (props) => {

    return (
        <div className={popupStyles.popup}>

            <h2>{props.title}</h2>

            <span className={popupStyles.close} onClick={props.close}>
                &times;
            </span>

            <button className={popupStyles.change} onClick={props.handler}>{'Show ' + props.nameStop + ' stop'}</button>

            <div className={popupStyles.content}>{props.signals.map((signal) => {
                return <SignalsComp
                        key={signal.cordinates_x}
                        text={'Was seen in ' + signal.name_stop + ' at ' + signal.spoted_at}
                        />
            })} </div>
        </div>
    );
}

const SignalsComp = (props) => {

    return <div>
        <h4>{props.text}</h4>
    </div>
}

export {ShowSignals, SignalsComp};