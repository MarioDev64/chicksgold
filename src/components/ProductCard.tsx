import React from 'react';
import styles from '../styles/ProductCard.module.scss';
import clockIcon from '../assets/green_clock.svg';
import cartIcon from '../assets/cart.svg';

interface Product{
  onSale: boolean;
  inStock: boolean,
  imageUrl: string,
  game: string,
  name: string,
  price: string,
  oldPrice: string | null,
  description: string
}

const ProductCard: React.FC<Product> = ({
  onSale,
  inStock,
  imageUrl,
  game,
  name,
  price,
  oldPrice,
  description
}) => {
  const baseUrl = import.meta.env.BASE_URL;
  const renderCategory = (game:string) =>{
      switch (game) {
        case 'rs':
          return `${baseUrl}/src/assets/rs.png`
        case 'metin2':
          return `${baseUrl}/src/assets/metin.png`
        case 'treeSavior':
          return `${baseUrl}/src/assets/treeSav.png`
        case 'rs3':
          return `${baseUrl}/src/assets/rs3.png`
        case 'lol':
          return `${baseUrl}/src/assets/lol.png`
        default:
          return `${baseUrl}/src/assets/rs.png`
      }
  }

  return (
    <div className={styles.productContainer}>
        <div className={styles.top}>
         
            <div className={styles.tooltipContainer}>
              {onSale && (
                <div className={styles.saleIcon}>
                    <div className={styles.dotIcon}></div>
                    ON SALE
                </div>
              )}
              {inStock && (
                <span className={styles.stock}>
                  In Stock
                  &nbsp;
                  <img src={clockIcon} alt="stock clock icon" />
                </span>
              )}
            </div>

            <div className={styles.quantityContainer}>
              <input type="number" min={1} value={1} className={styles.quantity} />
            </div>
        </div>
        <figure className={styles.figure}>
          <img src={imageUrl} className={styles.item} alt="product figure image" />
        </figure>
        <div className={styles.productInfo}>
          <div className={styles.name}>{name}</div>
          <div className={styles.categoryIcon}>
            <img src={renderCategory(game)} alt="product info category" />
          </div>
        </div>
        <div className={styles.priceArea}>
          <div className={styles.prices}>
            <span className={styles.realPrice}>{price}</span>
            {oldPrice && (<span className={styles.oldPrice}>{oldPrice}</span>)}
          </div>
        </div>
        <span className={styles.description}>
          {description}
        </span>
        <div className={styles.buttonsArea}>
          <div className={styles.detailsButton}>
            <a href="#" className={`${styles.detailsAnchor} ${styles.itemBtn}`}>
              Details
            </a>
          </div>
          <div className={styles.AddButton}>
            <button className={`${styles.addCartButton} ${styles.itemBtn}`}>
              <span className={styles.addText}>Add</span>
              <span className={styles.cartIcon}>
                <img src={cartIcon} alt="add cart icon" />
              </span>
            </button>
          </div>
        </div>
    </div>
  );
};

export default ProductCard;
