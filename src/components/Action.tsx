import React, { FC, useState } from 'react';
import button from './UI/Button/Button.module.css';
import styles from "../styles/modules/Action.module.css";
import Button from './UI/Button/Button';
import FormEditAction from './UI/Forms/FormEditAction/FormEditAction';
import { IActionProps } from '../types/types';

const Action: FC<IActionProps> = (props) => {
    const [text, setText] = useState(`${props.action.body}`);
    const [isEdit, setIsEdit] = useState(false);

    if (!isEdit) {
        return (
            <div className={styles.ActionBlock}>
                <div className={styles.ActionDrag}>
                    <div className={styles.ActionDragDot}></div>
                    <div className={styles.ActionDragDot}></div>
                    <div className={styles.ActionDragDot}></div>
                    <div className={styles.ActionDragDot}></div>
                    <div className={styles.ActionDragDot}></div>
                    <div className={styles.ActionDragDot}></div>
                </div>
                <p className={styles.ActionText}>{text}</p>
                <div className={styles.ButtonsBlock}>
                    <Button 
                        text={"Редактировать"} 
                        onClick={() => setIsEdit(true)}
                        className={`${button.Button} ${styles.ActionButton} ${styles.ActionButtonBlue}`}
                    />
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