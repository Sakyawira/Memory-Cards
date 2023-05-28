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
            <div>
              <img className="front" src={card.src} alt="card front" />
              <img onClick={() => dispatch(flipCardWithId(card.id))} className="back" src={logo} alt="card back" />
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
