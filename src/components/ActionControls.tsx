import React, { FC } from 'react';
import AddFilter from './AddFilter';
import AddSort from './AddSort';
import styles from "../styles/modules/ActionControls.module.css";

const ActionControls: FC = () => {
    return (
        <div className={styles.ActionControlsBlock}>
            <AddSort/>
            <AddFilter/>
        </div>
    );
};

export default ActionControls;