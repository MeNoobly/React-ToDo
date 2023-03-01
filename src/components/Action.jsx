import React, { useState } from 'react';
import button from './UI/Button/Button.module.css';
import styles from "../styles/modules/Action.module.css";
import Button from './UI/Button/Button';
import FormEditAction from './UI/Forms/FormEditAction/FormEditAction';

const Action = (props) => {
    const [text, setText] = useState(`${props.action.body}`);
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
        <FormEditAction text={text} setText={setText} setIsEdit={setIsEdit}/>
    );
};

export default Action;