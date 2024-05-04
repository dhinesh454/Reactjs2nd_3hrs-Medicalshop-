import { Fragment } from 'react';
import ReactDOM  from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = props =>{
    return <div className={classes.backdrop} onClick={props.onhideCart}/>
}

const ModalOverlay = props => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}


let PortalElement = document.getElementById('overlays')
const Modal = props => {
   return(
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onhideCart={props.onhideCart}/>,PortalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,PortalElement)}
    </Fragment>
   )
}

export default Modal;
