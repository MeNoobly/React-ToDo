import React from 'react';
import Action from './Action';
import styles from "../styles/modules/ActionList.module.css"

const ActionList = (props) => {
    if (props.actions.length === 0) {
        return (
            <div className={styles.Text}>
                <p>Список дел пуст</p>
            </div>
        )
    }

    return (
        <div>
            {props.actions.map((action, number) =>
                <Action action={action} key={action.id} number={number} removePost={props.removePost}/>
            )}
        </div>
    );
};

export default ActionList;