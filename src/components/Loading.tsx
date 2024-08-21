import React from 'react';
import styles from '../styles/Loading.module.scss';

const Loading: React.FC = () => {
  return (
    <div className={styles.ring}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
  );
};

export default Loading;
