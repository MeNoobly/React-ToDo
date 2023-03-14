import React, { FC } from 'react';
import AddFilter from './AddFilter';
import AddSort from './AddSort';
import styles from "../styles/modules/ActionControls.module.css";
import { IActionControlsProps } from '../types/types';

const ActionControls: FC<IActionControlsProps> = (props) => {
    return (
        <div className={styles.ActionControlsBlock}>
            <AddSort copyActions={props.copyActions} setCopyActions={props.setCopyActions}/>
            <AddFilter copyActions={props.copyActions} setCopyActions={props.setCopyActions}/>
        </div>
    );
};

export default ActionControls;