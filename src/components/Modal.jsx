import React from "react";

import '../styles/components/Modal.css';

import withDisplay from "../HOCs/withDisplay.jsx";
import {withRouter} from "react-router";

const Modal = (props) => {
  return (
    <>
      <div onClick={props.onClose} className="modal-background"/>
      <div className="modal-root">{props.children}</div>
    </>
  )
};

Modal.displayName = 'Modal';

export default withRouter(withDisplay(Modal));
