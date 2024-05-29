import React, { useState } from 'react';

import moon from '../../../images/icon-moon.svg';
import sun from '../../../images/icon-sun.svg';

import styles from './TodoHeader.module.css';

const TodoHeader = () => {
  const [theme, setTheme] = useState('dark-theme');
  const themeSwitchHandler = () => {
    let root = document.querySelector(':root');
    if (theme === 'light-theme') {
      root.className = 'dark-theme';
      setTheme('dark-theme');
    } else {
      root.className = 'light-theme';
      setTheme('light-theme');
    }
  };

  return (
    <div className={styles.header}>
      <p className={styles.logo}>todo</p>
      <div className={styles['theme-switcher']} onClick={themeSwitchHandler}>
        <img src={theme === 'light-theme' ? moon : sun} alt="" />
      </div>
    </div>
  );
};

export default TodoHeader;
