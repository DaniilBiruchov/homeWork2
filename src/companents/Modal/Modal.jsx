// import React, { Children } from 'react';
import style from './Modal.module.css'

const Modal = ({visible, setVisible, children}) => {

    const rootClasses = [style.modal]
    if (visible) {
        rootClasses.push(style.active)
    }
     
    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={style.modalContent} onClick={(e) => {e.stopPropagation()}}>
            {children}
            </div>
        </div>
    );
};

export default Modal;