import React, { FC, useContext, useState } from 'react';
import { ActionsContext } from '../context/actions';
import { IActionsContext } from '../types/types';
import ActionControls from './ActionControls';
import ActionList from './ActionList';
import FormAddAction from './UI/Forms/FormAddAction/FormAddAction';

const AddAction: FC = () => {
    const {actions, setActions} = useContext<IActionsContext>(ActionsContext);
    const [copyActions, setCopyActions] = useState([...actions]);
    const [body, setBody] = useState("");

    function addNewAction(event: React.MouseEvent<HTMLButtonElement>): void {
      event.preventDefault();
      const newAction = {
        id: Date.now(),
        body
      }
      setActions([...actions, newAction]);
      setCopyActions([...copyActions, newAction]);
      setBody("");
    }

    function removePost(id: number): (event: React.MouseEvent<HTMLButtonElement>) => void {
      return (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setActions([...actions].filter((item) => item.id !== id));
        setCopyActions([...copyActions].filter((item) => item.id !== id))
      }
    }

    return (
      <div>
        <FormAddAction body={body} setBody={setBody} addNewAction={addNewAction}/>
        <ActionControls copyActions={copyActions} setCopyActions={setCopyActions}/>
        <ActionList removePost={removePost}/>
      </div>
    );
};

export default AddAction;