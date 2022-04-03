import React from "react";
import styles from './Input.module.css'

const Input = React.forwardRef((props, ref) => {
    return (
        <div>
            <input ref={ref} className={styles.input} {...props}/>
        </div>
    )
})

export default Input