import React, { FC, useContext, useState } from 'react';
import { ActionsContext } from '../context/actions';
import styles from "../styles/modules/ActionControls.module.css";
import { IActionControlsProps, IActionsContext } from '../types/types';
import SearchIcon from './UI/Icons/SearchIcon/SearchIcon';
import Input from './UI/Input/Input';

const AddFilter: FC<IActionControlsProps> = (props) => {
    const {actions, setActions} = useContext<IActionsContext>(ActionsContext);
    const [isEdit, setIsEdit] = useState(false);
    const [searchInputValue, setSearchInputValue] = useState("");

    function filterActions(filterString: string): void {
        setActions([...props.copyActions.filter((element) => element.body.includes(filterString))]);
    }

    if (!isEdit) {
        return (
            <div className={styles.Filter}>
                <SearchIcon onClick={() => setIsEdit(true)}/>
            </div>
        );
    }

    return (
        <form className={styles.Filter}>
            <SearchIcon onClick={() => setIsEdit(false)}/>
            <Input 
                value={searchInputValue}
                onChange={(event: React.FormEvent<HTMLInputElement>) => {
                    setSearchInputValue((event.target as HTMLInputElement).value);
                    filterActions((event.target as HTMLInputElement).value);
                }}
                className={styles.FilterInput}
                type="text"
                autoFocus
                placeholder="Введите название дела..."
            />
        </form>
    )

};

export default AddFilter;