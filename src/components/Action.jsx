import React, { useState } from 'react';
import styles from "../styles/modules/Action.module.css";
import Button from './UI/Button/Button';
import button from './UI/Button/Button.module.css';
import Input from './UI/Input/Input';
import classnames from "classnames";

const Action = (props) => {
    const [text, setText] = useState(`${props.number + 1}. ${props.action.body}`);
    const [isEdit, setIsEdit] = useState(false);

    if (!isEdit) {
        return (
            <div className={styles.ActionBlock} onClick={() => setIsEdit(true)}>
                <p className={styles.ActionText}>{text}</p>
                <div className={styles.ButtonsBlock}>
                    <Button 
                        text={"Удалить"} 
                        onClick={props.remove(props.action.id)}
                        // className={`${styles.ActionButton} ${button.Button}`}
                        // className={classnames(styles.ActionButton, button.Button)}
                        className={button.Button + " " + styles.ActionButton}
                    />
                </div>
            </div>
        );
    }

    return (
        <div className={styles.ActionBlock}>
            <Input 
                value={text}
                onChange={(event) => setText(event.target.value)}
                onBlur={() => setIsEdit(false)}
            />
        </div>
    );
};

export default Action;