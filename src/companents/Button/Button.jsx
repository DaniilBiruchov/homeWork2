import React from "react";
import styles from './Button.module.css'

function Button ({children, ...props}) {
    return (
        <div>
            <button {...props} className={styles.btn}>{children}</button>
        </div>
    )
}

export default Button
