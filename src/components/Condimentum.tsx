import React, { useState } from 'react';
import styles from '../styles/Condimentun.module.scss';
import background_image from '../assets/default.jpg';
import GameSelector from '../components/GameSelector';
import SearchInput from '../components/SearchInput';
import FilterInputs from './FilterInputs';
import ItemsArea from './ItemsArea';
import useDebounce from '../utils/useDebounce';

const Condimentum: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const debounceSearchTerm = useDebounce(searchTerm, 500);

  return (
    <div className={styles.page}>
        <img src={background_image} className={styles.background_image} alt="Condimentum Image" />
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <h1 className={styles.title}>Condimentum consectetur</h1>
                <div className={styles.filtersArea}>
                    <GameSelector/>
                    <SearchInput setSearchTerm={setSearchTerm} />
                    <FilterInputs />
                </div>
                <ItemsArea searchTerm={debounceSearchTerm} />
            </div>
        </div>
    </div>
  );
};

export default Condimentum;
