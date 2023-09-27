import { useState } from 'react';
import styles from './Counter.module.scss';

const Counter = () => {

  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(prev => prev + 1);
  }

  const decrement = () => {
    setCounter(prev => prev - 1);
  }

  return (
    <div>
      <div className={styles.counter}>Count: {counter}</div>
      <div className={styles.buttons}>
        <button className={styles.btn} onClick={decrement}>-</button>
        <button className={styles.btn} onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default Counter;