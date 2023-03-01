import React, { useState } from 'react';
import button from './UI/Button/Button.module.css';
import input from "../components/UI/Input/Input.module.css";
import styles from "../styles/modules/Action.module.css";
import Button from './UI/Button/Button';
import Input from './UI/Input/Input';

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
                        onClick={props.removePost(props.action.id)}
                        className={`${button.Button} ${styles.ActionButton}`}
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
                className={`${input.Input} ${styles.ActionEditInput}`}
            />
            <Button 
                className={`${button.Button} ${styles.ActionEditButton}`}
                text={"Сохранить"}
                onClick={() => setIsEdit(false)}
            />
        </div>
    );
};

export default Action;