import React, { FC, useContext, useState } from 'react';
import { ActionsContext } from '../context/actions';
import ActionList from './ActionList';
import FormAddAction from './UI/Forms/FormAddAction/FormAddAction';

const AddAction: FC = () => {
    const {actions, setActions} = useContext(ActionsContext);
    const [body, setBody] = useState("");

    function addNewAction(event: React.MouseEvent<HTMLButtonElement>): void {
      event.preventDefault();
      const newAction = {
        id: Date.now(),
        body
      }
      setActions([...actions, newAction]);
      setBody("");
    }

    function removePost(id: number): (event: React.MouseEvent<HTMLButtonElement>) => void {
      return (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setActions([...actions].filter((item) => item.id !== id));
      }
    }

    return (
      <div>
        <FormAddAction body={body} setBody={setBody} addNewAction={addNewAction}/>
        <ActionList removePost={removePost}/>
      </div>
    );
};

export default AddAction;