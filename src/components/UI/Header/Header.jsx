import React from 'react';
import styles from "./Header.module.css";

const Header = (props) => {
    if (props.type === "main") {
        return (
            <h1 className={styles.Main}>{props.text}</h1>
        );
    }
};

export default Header;