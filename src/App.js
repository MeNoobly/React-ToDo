import React from "react";
import "./styles/null.css";
import "./styles/normalize.css";
import styles from "./styles/main.module.css";
import Header from "./components/UI/Header/Header";
import Form from "./components/UI/Form/Form";

function App() {
  return (
    <div className={styles.Container}>
      <Header type="main" text="Список дел"/>
      <Form/>
    </div>
  );
}

export default App;