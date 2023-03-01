import React, { useState } from 'react';
import ActionList from './ActionList';
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
        <ActionList actions={actions} removePost={removePost}/>
      </div>
    );
};

export default AddAction;