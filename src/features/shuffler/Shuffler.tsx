// import React, { useState } from 'react';
import logo from '../../img/logo.svg';
import img from '../../img/Bread_Jam1.png';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  selectShuffle, shuffle,
} from './shufflerSlice';
import styles from './Shuffler.module.css';

export function Shuffler() {
  const shuffleSelector = useAppSelector(selectShuffle);
  const dispatch = useAppDispatch();


  return (
      <>
      <button onClick={() => dispatch(shuffle())} className={styles.button}>
        Shuffle
      </button>
      <div className={styles.cardGrid}>
        {shuffleSelector.map((card) => (
          <div className={styles.card} key={card.id}>
            <div>
              <img className="front" src={card.src} alt="card front" />
              <img className="back" src={logo} alt="card back" />
            </div>
          </div>
        ))}
      </div>
      </>
  );
}
