// import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  selectShuffle, shuffle,
} from './shufflerSlice';
import styles from './Shuffler.module.css';

export function Shuffler() {
  const shuffleSelector = useAppSelector(selectShuffle);
  const dispatch = useAppDispatch();


  return (
    <div>
    {/* <span className={styles.value}>{shuffleSelector}</span> */}
      <div className={styles.row}>
        <button
          className={styles.button}
          onClick={() => dispatch(shuffle())}
        >
          Shuffle
        </button>
      </div>
    </div>
  );
}
