import logo from '../../img/logo.svg';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  selectShuffle, shuffle, flipCardWithId
} from './shufflerSlice';
import styles from './Shuffler.module.css';

export function Shuffler() {
  const shuffleSelector = useAppSelector(selectShuffle);
  const dispatch = useAppDispatch();

  return (
      <>
      <div className={styles.cardGrid}>
        {shuffleSelector.map((card) => (
          <div className={styles.card} key={card.id}>
            <div className={card.isFlipped ? styles.flipped : ""}>
              <img className={styles.front} src={card.src} alt="card front" />
              <img  className={styles.back} onClick={() => dispatch(flipCardWithId(card.id))} src={logo} alt="card back" />
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => dispatch(shuffle())} className={styles.button}>
        Shuffle
      </button>
      </>
  );
}
