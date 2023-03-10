import React, { FC } from 'react';
import { IButtonProps } from '../../../types/types';

const Button: FC<IButtonProps> = (props) => {
    return (
        <button className={props.className} onClick={props.onClick}>
            {props.text}
        </button>
    );
};

export default Button;