import React, { FC } from 'react';
import { IInput } from '../../../types/types';

const Input: FC<IInput> = (props) => {
    return (
        <input {...props}/>
    );
};

export default Input;