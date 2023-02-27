import React from 'react';
import Header from "./UI/Header/Header"

const Action = (props) => {
    return (
        <div>
            <Header type="main" text={props.action.body}/>
        </div>
    );
};

export default Action;