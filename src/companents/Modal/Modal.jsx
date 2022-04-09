// import React, { Children } from 'react';
import style from './Modal.module.css'

const Modal = ({visible, setVisible}) => {

    const rootClasses = [style.modal]
    if (visible) {
        rootClasses.push(style.active)
    }
     
    return (
        <div className={rootClasses.join(' ')}>
            <div className={style.modalContent}>
            </div>
        </div>
    );
};

export default Modal;