import React, { FC } from 'react';
import styles from "../styles/modules/ActionControls.module.css";
import SearchIcon from './UI/Icons/SearchIcon/SearchIcon';

const AddFilter: FC = () => {
    return (
        <div className={styles.Filter}>
            <SearchIcon/>
        </div>
    );
};

export default AddFilter;