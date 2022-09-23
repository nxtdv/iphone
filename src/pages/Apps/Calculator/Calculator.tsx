import { useState, useEffect } from "react";
import styles from "./Calculator.module.scss";
import AppContainer from "../../../components/AppContainer/AppContainer";

const Calculator = () => {
  return (
    <AppContainer>
      <div className={styles.calculatorContainer}>Calculator</div>
    </AppContainer>
  );
};

export default Calculator;
