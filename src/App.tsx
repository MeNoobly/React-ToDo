import React, { useState } from "react";
import "./styles/null.css";
import "./styles/normalize.css";
import "./styles/fonts.css"
import styles from "./styles/modules/main.module.css";
import Header from "./components/UI/Header/Header";
import AddAction from "./components/AddAction";
import { ActionsContext } from "./context/actions";
import { IAction } from "./types/types";

const App = () => {
  const [actions, setActions] = useState<IAction[]>([]);

  return (
    <ActionsContext.Provider value={{actions, setActions}}>
      <div className={styles.Container}>
        <Header text="Список дел"/>
        <AddAction/>
      </div>
    </ActionsContext.Provider>
  );
}

export default App;