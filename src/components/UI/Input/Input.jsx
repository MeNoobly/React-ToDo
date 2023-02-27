import React from 'react';
import styles from "./Input.module.css";

const Input = (props) => {
    return (
        <input className={styles.Input} {...props}/>
    );
};

export default Input;