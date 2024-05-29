import React from 'react';
import { useDispatch } from 'react-redux';

import ListController from './list-controller/ListController';
import { listActions } from '../../store/list';

import styles from './ListFooter.module.css';

const ListFooter = (props) => {
  const dispatch = useDispatch();
  const clearHandler = () => {
    dispatch(listActions.clearCompleted());
  };
  return (
    <div className={styles.footer}>
      <div>{props.itemsLeft} items left</div>
      <ListController platform="mobile" />
      <div className={styles.clear} onClick={clearHandler}>
        Clear Completed
      </div>
    </div>
  );
};

export default ListFooter;
