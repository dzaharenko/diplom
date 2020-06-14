import React from 'react';
import withDisplay from '../HOCs/withDisplay.jsx';
import {withRouter} from 'react-router';

import '../styles/components/Modal.css';

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
