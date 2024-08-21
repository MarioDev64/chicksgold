import React from 'react';
import styles from '../styles/NoResultsFound.module.scss';
import noResultsImage from '../assets/chick_crying.svg';

const NoResultsFound: React.FC = () => {
  return (
    <div className={styles.noResultsContainer}>
      <img src={noResultsImage} alt="No Results Found" className={styles.noResultsImage} />
      <p className={styles.noResultsText}>We searched the entire galaxy. Unfortunately, no results were found.</p>
    </div>
  );
};

export default NoResultsFound;
