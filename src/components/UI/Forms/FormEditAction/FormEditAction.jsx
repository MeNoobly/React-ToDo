import React from 'react';
import Button from '../../Button/Button';
import Input from '../../Input/Input';
import input from "../../Input/Input.module.css"
import button from "../../Button/Button.module.css"
import styles from "./FormEditAction.module.css";
import action from "../../../../styles/modules/Action.module.css"

const FormEditAction = (props) => {
    return (
        <form className={action.ActionBlock}>
            <Input 
                value={props.text}
                onChange={(event) => props.setText(event.target.value)}
                onBlur={() => props.setIsEdit(false)}
                className={`${input.Input} ${styles.FormEditInput}`}
                autoFocus
            />
            <Button
                className={`${button.Button} ${styles.FormEditButton}`}
                text={"Сохранить"}
                onClick={() => props.setIsEdit(false)}
            />
        </form>
    );
};

export default FormEditAction;