import React, { useState } from 'react';
import Action from '../../Action';
import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from "./Form.module.css";

const Form = () => {
    const [actions, setActions] = useState([]);

    const [body, setBody] = useState("");

    function addNewAction(event) {
      event.preventDefault();
      const newAction = {
        id: Date.now(),
        body
      }
      setActions([...actions, newAction]);
      setBody("");
    }

    return (
      <form className={styles.Form}>
        <Input
          value={body}
          type="text" 
          placeholder="Введите дело" 
          onChange={event => setBody(event.target.value)} 
        />
        <Button onClick={addNewAction} text="Добавить дело"></Button>
        {actions.map(action =>
          <Action action={action} key={action.id}/>
        )}
      </form>
    );
};

export default Form;