import React, { useState } from 'react';
import Action from './Action';
import FormAddAction from './UI/Forms/FormAddAction/FormAddAction';

const AddAction = () => {
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

    function removePost(id) {
      return (event) => {
        event.preventDefault();
        setActions([...actions].filter((item) => item.id !== id));
      }
    }

    return (
      <div>
        <FormAddAction body={body} setBody={setBody} addNewAction={addNewAction}/>
        {actions.map((action, number) =>
          <Action action={action} key={action.id} number={number} remove={removePost}/>
        )}
      </div>
    );
};

export default AddAction;