import React from 'react';
import styles from '../styles/SearchInput.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchInput: React.FC = () => {
  return (
    <div className={styles.searchContainer}>
        <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className={styles.searchIcon}
        />
        <input 
          type="text" 
          placeholder="Search" 
          className={styles.searchInput}
        />
    </div>
  );
};

export default SearchInput;
