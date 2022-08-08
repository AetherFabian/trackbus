import { useEffect, useState } from "react";
import popupStyles from "../css/custom-popup.module.css";
import PropTypes from "prop-types";
import ShowSignal from "./showSignal";
import {ShowSignals} from "./showSignals";

const CustomPopup = (props) => {
  const [show, setShow] = useState(false);
  const [showLogs, setShowLogs] = useState(false);

  const closeHandler = (e) => {
    setShow(false);
    setShowLogs(false);
    props.onClose(false);
  };

  const changeHandler = (e) =>{
    setShowLogs(!showLogs);
  }

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  return (
    <div
      style={{
        visibility: show ? "visible" : "hidden",
        opacity: show ? "1" : "0"
      }}
      className={popupStyles.overlay}
    >
      {showLogs !== true ? <ShowSignal
        title={props.title}
        nameStop={props.nameStop}
        signals={props.signals}
        close={closeHandler}
        handler={changeHandler}
      />
      : 
      <ShowSignals
      title={props.title}
      nameStop={props.nameStop}
      signals={props.signals}
      handler={changeHandler}
      close={closeHandler}
      />}

    </div>
  );
};

CustomPopup.propTypes = {
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};
export default CustomPopup;