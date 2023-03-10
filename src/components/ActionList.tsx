import React, { FC, useContext } from 'react';
import Action from './Action';
import styles from "../styles/modules/ActionList.module.css"
import { ActionsContext } from '../context/actions';
import { IActionListProps } from '../types/types';
import AddSort from './AddSort';

const ActionList: FC<IActionListProps> = (props) => {
    
    const {actions} = useContext(ActionsContext);

    if (!actions.length) {
        return (
            <div className={styles.Text}>
                <p>Список дел пуст</p>
            </div>
        )
    }

    return (
        <div>
            <AddSort/>
            {actions.map((action, number: number) => 
                <Action 
                    action={action} 
                    key={action.id} 
                    number={number} 
                    removePost={props.removePost}
                />
            )}   
        </div>
    )
};

export default ActionList;