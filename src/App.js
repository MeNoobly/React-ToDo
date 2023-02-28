import React from "react";
import "./styles/null.css";
import "./styles/normalize.css";
import "./styles/fonts.css"
import styles from "./styles/modules/main.module.css";
import Header from "./components/UI/Header/Header";
import AddAction from "./components/AddAction";

function App() {
  return (
    <div className={styles.Container}>
      <Header type="main" text="Список дел"/>
      <AddAction/>
    </div>
  );
}

export default App;