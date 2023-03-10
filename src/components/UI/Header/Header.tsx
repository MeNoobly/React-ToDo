import React, { FC } from 'react';
import styles from "./Header.module.css";

interface IHeaderProps {
    text: string;
}

const Header: FC<IHeaderProps> = (props) => {
    return (
        <h1 className={styles.Main}>{props.text}</h1>
    );
};

export default Header;