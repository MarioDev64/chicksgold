import React from 'react';
import styles from '../styles/GameSelector.module.scss';
import gameControllerIcon from '../assets/game-default.svg';
import arrowIcon from '../assets/arrow-white.svg';

const GameSelector: React.FC = () => {
  return (
    <div className={styles.gameSelector}>
        <label htmlFor="">Select a game</label>
        <div className={styles.inputContainer}>
            <img src={gameControllerIcon} className={styles.gameControllerIcon} alt='game controller icon' />
            <input type="text" className={styles.selectInput} readOnly />
            <img src={arrowIcon} className={styles.arrowIcon} alt='arrow icon' />
        </div>
    </div>
  );
};

export default GameSelector;
