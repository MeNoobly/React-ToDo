import React, { FC, useContext } from 'react';
import Action from './Action';
import styles from "../styles/modules/ActionList.module.css"
import { ActionsContext } from '../context/actions';
import { IActionListProps, IActionsContext } from '../types/types';

const ActionList: FC<IActionListProps> = (props) => {
    
    const {actions} = useContext<IActionsContext>(ActionsContext);

    if (!actions.length) {
        return (
            <div>
                <div className={styles.Text}>
                    <p>Список дел пуст</p>
                </div>
            </div>
        )
    }
    
    return (
        <div>
            <div>
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