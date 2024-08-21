import React from 'react';
import styles from '../styles/SearchInput.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

interface searchInputProps{
  setSearchTerm: (term: string) => void;
}
const SearchInput: React.FC<searchInputProps> = ({setSearchTerm}) => {

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  }

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
          onChange={handleChange} 
        />
    </div>
  );
};

export default SearchInput;
