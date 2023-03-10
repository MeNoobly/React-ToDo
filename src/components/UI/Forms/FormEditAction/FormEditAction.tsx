import React, { FC } from 'react';
import Button from '../../Button/Button';
import Input from '../../Input/Input';
import input from "../../Input/Input.module.css"
import button from "../../Button/Button.module.css"
import styles from "./FormEditAction.module.css";
import action from "../../../../styles/modules/Action.module.css"
import { IFormEditActionProps } from '../../../../types/types';

const FormEditAction: FC<IFormEditActionProps> = (props) => {
    return (
        <form className={action.ActionBlock}>
            <Input 
                value={props.text}
                type="text"
                onChange={(event: React.FormEvent<HTMLInputElement>) => props.setText((event.target as HTMLInputElement).value)}
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