import React, {useState} from 'react';
import styles from '../styles/FilterInputs.module.scss';
import itemBag from '../assets/itemBag.svg';
import feather from '../assets/feather.svg';
import arrowIcon from '../assets/arrow-white.svg';

const FilterInputs: React.FC = () => {
  const [showRange, setShowRange] = useState<boolean>(false);

  return (
    <div className={styles.filtersContainer}>
        <div className={styles.inputWrapper} style={{position: 'relative'}}>
          <button className={styles.PriceFilter} onClick={() => setShowRange(!showRange)}>
            <div className={styles.groupLeft}>
              <img src={itemBag} className={styles.icon} alt="Price Icon" />
              <div className={styles.infoWrapper}>
                <span>Price</span>
                <label>All</label>
              </div>
            </div>
            
            <img src={arrowIcon} className={styles.arrowIcon} alt='arrow icon' />
          </button>
          {showRange && 
            <div className={styles.inputContainer}>
              <div className={styles.inputNumberWrapper}>
                <input type="number" min={1} className={styles.minPrice} />
                <input type="number" min={1} className={styles.maxPrice} />
              </div>
            </div>
          }
        </div>
        <div className={`${styles.inputWrapper} ${styles.typeFilterWrapper}`}>
          <button className={styles.typeFilter}>
            <div className={styles.groupLeft}>
              <img src={feather} alt="Feather icon" className={styles.icon} />
              <div className={styles.infoWrapper}>
                <span>Item Type</span>
                <label>All</label>
              </div>
            </div>
            <img src={arrowIcon} className={styles.arrowIcon} alt='arrow icon' />
          </button>
        </div>
    </div>
  );
};

export default FilterInputs;
