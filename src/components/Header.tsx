import React, { useState } from 'react';
import styles from '../styles/Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import profileIcon from '../assets/profile.webp';
import HeaderSearchInput from '../components/HeaderSearchInput';
import chicksGoldLogo_svg from '../assets/chicks-logo-large.svg';
import { currencies } from '../utils/currencies';

const Header: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCurrencyDropdown = () => {
    setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen);
  };

  const navLinks = ['Currency', 'Items', 'Accounts', 'Services', 'More', 'Sell'];


  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <button className={styles.hamburgerButton} onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div className={styles.logo}>
            <a href="/">
              <img
                src={chicksGoldLogo_svg}
                alt="Chicks Gold Logo"
                className={styles.logoImage}
                width={155}
                height={32}
              />
            </a>
          </div>
        </div>
        
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {navLinks.map((item, index) => (
              <li
                className={styles.navItem}
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <a href="#" className={styles.navLink}>
                  {item}
                  <FontAwesomeIcon
                    icon={hoveredIndex === index ? faAngleUp : faAngleDown}
                    className={styles.arrowIcon}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.actions}>
          <div
            className={styles.currencyDropdownWrapper}
            onMouseEnter={toggleCurrencyDropdown}
            onMouseLeave={toggleCurrencyDropdown}
          >
            <button className={styles.currencyButton} onClick={toggleCurrencyDropdown}>
              USD
              <FontAwesomeIcon
                icon={isCurrencyDropdownOpen ? faAngleUp : faAngleDown}
                className={styles.arrowIcon}
              />
            </button>
            {isCurrencyDropdownOpen && (
              <ul className={styles.currencyDropdown}>
                {currencies.map((currency, index) => (
                  <li key={index} className={styles.currencyItem}>
                    <span>
                      <img src={currency.flag} alt={`${currency.name} flag`} />
                      {currency.name}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button className={styles.signInButton}>
            Sign In
            <img
              src={profileIcon}
              alt="Chicks Gold Logo"
              className={styles.signInIcon}
              width={16}
              height={14}
            />
          </button>
        </div>
      </div>
      <div className={`${styles.fullscreenMenu} ${isMenuOpen ? styles.open : ''}`}>
        <div className={styles.menuHeader}>
          <button className={styles.closeButton} onClick={toggleMenu}>
            <FontAwesomeIcon icon={faTimes} />
            <span>Close</span>
          </button>
          <HeaderSearchInput/>
        </div>
        <ul className={styles.menuLinks}>
          {navLinks.map((item, index) => (
            <li className={styles.menuItem} key={index}>
              <a href="#" className={styles.menuLink}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
