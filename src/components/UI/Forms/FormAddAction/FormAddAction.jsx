import React from 'react';
import Button from '../../Button/Button';
import Input from '../../Input/Input';
import input from "../../Input/Input.module.css";
import button from "../../Button/Button.module.css"
import styles from "./FormAddAction.module.css";

const FormAddAction = (props) => {
    return (
        <form className={styles.FormAddAction}>
          <Input
            value={props.body}
            type="text" 
            placeholder="Введите дело" 
            onChange={event => props.setBody(event.target.value)} 
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