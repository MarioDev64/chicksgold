import React, { useState } from 'react';
import styles from '../styles/Footer.module.scss';
import chicksGoldLogo from '../assets/chicks-logo-large.svg';
import arrowDown from '../assets/arrow-down.svg';
import star_full from '../assets/star_full.svg';
import star_half from '../assets/star_half.svg';
import discord_white from '../assets/discord_white.svg';
import instagram_white from '../assets/instagram_white.svg';
import twitter_white from '../assets/twitter_white.svg';
import facebook_white from '../assets/facebook_white.svg';

const Footer: React.FC = () => {
  return (
    <div className={styles.container}>
        <footer className={styles.footer}>
          <div className={styles.footerContainer}>
            <div className={styles.footerContent}>
              <div className={styles.mainContent}>
                <div className={styles.infoSection}>
                  <a href="/" className={styles.logo}>
                    <img src={chicksGoldLogo} width={139} height={39} alt="chicks gold logo" />
                  </a>
                  <span className={styles.contactEmail}>
                    support@chicksgold.com
                  </span>
                </div>
                <div className={styles.infoSectionMobile}>
                  <div className={styles.footerDropdown}> 
                    <div className={styles.dropdownTop}>
                      <span>Chicks Gold</span>
                      <img src={arrowDown} className={styles.arrowIcon} alt="dropdown arrow down" />
                    </div>
                    <div className={styles.dropdownContent}>
                      <a href="https://chicksgold.com/about-us">About Us</a>
                      <a href="https://chicksgold.com/blog">Blog</a>
                      <a href="https://chicksgold.com/bug-bounty">Bug Bounty</a>
                    </div>
                  </div>
                  <div className={styles.footerDropdown}> 
                    <div className={styles.dropdownTop}>
                      <span>Support</span>
                      <img src={arrowDown} className={styles.arrowIcon} alt="dropdown arrow down" />
                    </div>
                    <div className={styles.dropdownContent}>
                      <a href="https://chicksgold.com/contact">Contact Us</a>
                      <a href="https://chicksgold.com/faq">FAQ</a>
                      <a href="https://chicksgold.com/sitemap">Sitemap</a>
                    </div>
                  </div>
                  <div className={styles.footerDropdown}> 
                    <div className={styles.dropdownTop}>
                      <span>Legal</span>
                      <img src={arrowDown} className={styles.arrowIcon} alt="dropdown arrow down" />

                    </div>
                    <div className={styles.dropdownContent}>
                      <a href="https://chicksgold.com/privacy-policy">Privacy Policy</a>
                      <a href="https://chicksgold.com/terms-of-service">Terms of Services</a>
                      <a href="https://chicksgold.com/copyright-policy">Copyright Policy</a>
                    </div>
                  </div>
                </div>
                <div className={styles.infoSectionTabletDesktop}>
                  <div className={styles.footerSection}>
                    <span>Chicks Gold</span>
                    <div className={styles.links}>
                      <a href="https://chicksgold.com/about-us">About Us</a>
                      <a href="https://chicksgold.com/blog">Blog</a>
                      <a href="https://chicksgold.com/bug-bounty">Bug Bounty</a>
                    </div>
                  </div>
                  <div className={styles.footerSection}>
                    <span>Support</span>
                    <div className={styles.links}>
                      <a href="https://chicksgold.com/contact">Contact Us</a>
                      <a href="https://chicksgold.com/faq">FAQ</a>
                      <a href="https://chicksgold.com/sitemap">Sitemap</a>
                    </div>
                  </div>
                  <div className={styles.footerSection}>
                    <span>Legal</span>
                    <div className={styles.links}>
                      <a href="https://chicksgold.com/privacy-policy">Privacy Policy</a>
                      <a href="https://chicksgold.com/terms-of-service">Terms of Services</a>
                      <a href="https://chicksgold.com/copyright-policy">Copyright Policy</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.trustpilotReviews}>
                <a href="https://www.trustpilot.com/review/chicksgold.com" target="_blank" rel="nofollow noopener noreferrer">
                  Trustpilot Reviews
                </a>
                <div className={styles.stars}>
                  <img src={star_full} width={18} height={17} alt="trst pilot stars icons"/>
                  <img src={star_full} width={18} height={17} alt="trst pilot stars icons"/>
                  <img src={star_full} width={18} height={17} alt="trst pilot stars icons"/>
                  <img src={star_full} width={18} height={17} alt="trst pilot stars icons"/>
                  <img src={star_half} width={18} height={17} alt="trst pilot stars icons"/>
                  <span>4.5/5</span>
                </div>
              </div>
              <div className={styles.socialMedia}>
                <span>Social</span>
                <div className={styles.socialMediaContainer}>
                  <div className={styles.wrapper}>
                    <a href="https://discord.com/invite/chicksgold" target="_blank" rel="nofollow noopener noreferrer">
                      <div className={styles.socialMediaIcon}>
                        <img src={discord_white} width={18} height={14} alt="social media discord icon" />
                      </div>
                    </a>
                  </div>
                  <div className={styles.wrapper}>
                    <a href="https://www.instagram.com/chicksgold/" target="_blank" rel="nofollow noopener noreferrer">
                      <div className={styles.socialMediaIcon}>
                        <img src={instagram_white} width={18} height={14} alt="social media instagram icon" />
                      </div>
                    </a>
                  </div>
                  <div className={styles.wrapper}>
                    <a href="https://twitter.com/chicksgold" target="_blank" rel="nofollow noopener noreferrer">
                      <div className={styles.socialMediaIcon}>
                        <img src={twitter_white} width={18} height={14} alt="social media instagram icon" />
                      </div>
                    </a>
                  </div>
                  <div className={styles.wrapper}>
                    <a href="https://www.facebook.com/Chicksgroup" target="_blank" rel="nofollow noopener noreferrer">
                      <div className={styles.socialMediaIcon}>
                        <img src={facebook_white} width={18} height={14} alt="social media instagram icon" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.copyRight}>
                Copyright © 2017, ChicksGold.com. All Rights Reserved
              </div>
            </div>
          </div>
        </footer>
    </div>
  );
};

export default Footer;
