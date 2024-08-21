import React, { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import NoResultsFound from '../components/NoResultsFound';
import styles from '../styles/ItemsArea.module.scss';
import filter from '../assets/filter.svg';
import arrowIcon from '../assets/arrow-white.svg';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';
import productsData from '../data.json';

interface ItemsAreaProps {
  searchTerm: string;
}

const ItemsArea: React.FC<ItemsAreaProps> = ({ searchTerm }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const itemsPerPage = 15;
  const baseUrl = import.meta.env.BASE_URL;

  const filteredProducts = searchTerm 
    ? productsData.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      ) 
    : productsData;

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    if (searchTerm) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500);

      return () => clearTimeout(timer);
    } else {
      setIsLoading(false);
    }
  }, [searchTerm]);

  const isContentCentered = isLoading || (searchTerm && paginatedProducts.length === 0);

  return (
    <div className={styles.mainContent}>
      <div className={styles.sortArea}>
        <p className={styles.showing}>
          Showing {paginatedProducts.length} of {filteredProducts.length} products
        </p>
        <div className={styles.inputWrapper}>
          <button className={styles.SortByFilter}>
            <div className={styles.groupLeft}>
              <img src={filter} className={styles.icon} alt="SortBy Icon" />
              <div className={styles.infoWrapper}>
                <span>Sort By</span>
                <label>Featured</label>
              </div>
            </div>
            <img src={arrowIcon} className={styles.arrowIcon} alt="arrow icon" />
          </button>
        </div>
      </div>
      <div className={`${styles.products} ${isContentCentered ? styles.centerContent : ''}`}>
        <div className={styles.itemsList}>
          {isLoading ? (
            <Loading />
          ) : paginatedProducts.length > 0 ? (
            paginatedProducts.map((product, index) => (
              <ProductCard
                key={index}
                onSale={product.onSale}
                inStock={product.inStock}
                imageUrl={`${baseUrl}${product.imageUrl}`}
                game={product.game}
                name={product.name}
                price={product.price}
                oldPrice={product.oldPrice}
                description={product.description}
              />
            ))
          ) : (
            <NoResultsFound />
          )}
        </div>
      </div>
      {!searchTerm && !isLoading && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          onPreviousPage={handlePreviousPage}
          onNextPage={handleNextPage}
        />
      )}
    </div>
  );
};

export default ItemsArea;
