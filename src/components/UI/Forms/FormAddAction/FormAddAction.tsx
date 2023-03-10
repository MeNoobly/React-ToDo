import React, { FC } from 'react';
import Button from '../../Button/Button';
import Input from '../../Input/Input';
import input from "../../Input/Input.module.css";
import button from "../../Button/Button.module.css"
import styles from "./FormAddAction.module.css";
import { IFormAddActionProps } from '../../../../types/types';

const FormAddAction: FC<IFormAddActionProps> = (props) => {
    return (
        <form className={styles.FormAddAction}>
          <Input
            value={props.body}
            type="text"
            placeholder="Введите дело"
            onChange={(event: React.FormEvent<HTMLInputElement>) => props.setBody((event.target as HTMLInputElement).value)} 
            className={`${input.Input} ${styles.FormAddActionInput}`}
          />
          <Button 
            onClick={props.addNewAction} 
            text="Добавить" 
            className={`${button.Button} ${styles.FormAddActionButton}`}
          />
        </form>
    );
};

export default FormAddAction;