import React from 'react';
import styles from '../styles/Pagination.module.scss';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onPreviousPage: () => void;
  onNextPage: () => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange, onPreviousPage, onNextPage }) => {
  const getVisiblePages = () => {
    const pages: (number | string)[] = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      pages.push(1);

      if (startPage > 2) {
        pages.push('...');
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (endPage < totalPages - 1) {
        pages.push('...');
      }

      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className={styles.paginationArea}>
      <ul className={styles.pagination}>
        {currentPage > 1 && (
          <li className={`${styles.pageItem} ${styles.pageItemArrow}`}>
            <button className={styles.pageItemButton} onClick={onPreviousPage}>
              ❮
            </button>
          </li>
        )}
        {getVisiblePages().map((page, index) => (
          <li key={index} className={`${styles.pageItem} ${page === currentPage ? styles.highlighted : ''}`}>
            {typeof page === 'number' ? (
              <button className={styles.pageItemButton} onClick={() => onPageChange(page)}>
                {page}
              </button>
            ) : (
              <span className={styles.pageItemButton}>{page}</span>
            )}
          </li>
        ))}
        {currentPage < totalPages && (
          <li className={`${styles.pageItem} ${styles.pageItemArrow}`}>
            <button className={styles.pageItemButton} onClick={onNextPage}>
              ❯
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
