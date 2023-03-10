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

    function sortActionList(): void {
        clearTimeout(timerRef.current);

        let sortText = document.getElementById("sortText");
        if (sort === "" || sort === "Дела по умолчанию") {
            sortText?.classList.remove(sortStyles.None);
            setSort("Ранние добавленные дела");
        } else if (sort === "Ранние добавленные дела") {
            sortText?.classList.remove(sortStyles.None);
            setSort("Поздние добавленные дела");
        } else if (sort === "Поздние добавленные дела") {
            sortText?.classList.remove(sortStyles.None);
            setSort("Дела от А до Я (от A до Z)");
        } else if (sort === "Дела от А до Я (от A до Z)") {
            sortText?.classList.remove(sortStyles.None);
            setSort("Дела от Я до А (от Z до A)");
        } else if (sort === "Дела от Я до А (от Z до A)") {
            sortText?.classList.remove(sortStyles.None);
            setSort("Дела по умолчанию");
        }

        timerRef.current = setTimeout(() => sortText?.classList.add(sortStyles.None), 1500);
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