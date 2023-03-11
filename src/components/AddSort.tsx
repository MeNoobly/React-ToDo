import React, { FC, useContext, useRef, useState } from 'react';
import Button from './UI/Button/Button';
import button from "./UI/Button/Button.module.css"
import styles from "./UI/Forms/FormAddAction/FormAddAction.module.css";
import sortStyles from "../styles/modules/SortButton.module.css";
import { ActionsContext } from '../context/actions';

const AddSort: FC = () => { 
    const {actions, setActions} = useContext(ActionsContext);
    const [sort, setSort] = useState("");
    const timerRef = useRef<ReturnType<typeof setTimeout>>();
    const sortText = document.getElementById("sortText");

    function sortActionList(): void {
        if (actions.length > 1) {
            clearTimeout(timerRef.current);
            sortText?.classList.remove(sortStyles.None);
            switch(sort) {
                case "":
                case "Дела по умолчанию":
                    setActions([...actions].sort((firstAction, secondAction) => 
                        firstAction.id - secondAction.id).reverse()
                    );
                    setSort("Список дел с конца");
                    break;
                case "Список дел с конца":
                    setActions([...actions].sort((firstAction, secondAction) => 
                        firstAction.body.localeCompare(secondAction.body))
                    );
                    setSort("Дела от А до Я (от A до Z)");
                    break;
                case "Дела от А до Я (от A до Z)":
                    setActions([...actions].sort((firstAction, secondAction) => 
                        firstAction.body.localeCompare(secondAction.body)).reverse()
                    );
                    setSort("Дела от Я до А (от Z до A)");
                    break;
                case "Дела от Я до А (от Z до A)":
                    setActions([...actions].sort((firstAction, secondAction) => 
                        firstAction.id - secondAction.id)
                    );
                    setSort("Дела по умолчанию");
                    break;
            }
            timerRef.current = setTimeout(() => sortText?.classList.add(sortStyles.None), 1500);
        }
    }

    return (
        <div className={sortStyles.SortSection}>
            <Button
                text="Сортировка" 
                className={`${button.Button} ${styles.FormAddActionButton} ${sortStyles.SortButton}`}
                onClick={sortActionList}
            />
            <p className={sortStyles.SortText} id="sortText">{sort}</p>
        </div>
    );
};

export default AddSort;