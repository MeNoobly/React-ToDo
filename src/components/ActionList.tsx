import React, { FC, useContext } from 'react';
import Action from './Action';
import styles from "../styles/modules/ActionList.module.css"
import { ActionsContext } from '../context/actions';
import { IActionListProps } from '../types/types';
import ActionControls from './ActionControls';

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
            <div>
                <ActionControls/>
                {actions.map((action, number: number) => 
                    <Action 
                        action={action} 
                        key={action.id} 
                        number={number} 
                        removePost={props.removePost}
                    />
                )}   
            </div> 
        </div>
    )
};

export default ActionList;