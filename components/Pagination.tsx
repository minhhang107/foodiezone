import Router from 'next/router';
import { useEffect, useState } from 'react';
import styles from '../styles/Pagination.module.sass';

type Props = {
  cuisineQuery: string;
  boroughQuery: string;
  page: number;
  setPage: (page: number) => void;
};

const Pagination = ({ cuisineQuery, boroughQuery, page, setPage }: Props) => {
  const [currentPage, setCurrentPage] = useState(page);

  const handlePreviousPage = () => {
    if (page !== 1) {
      setCurrentPage(page - 1);
    }
  };

  const handleNextPage = () => {
    setCurrentPage(page + 1);
  };

  useEffect(() => {
    setPage(currentPage);
    handlePageChange(currentPage);
  }, [currentPage]);

  const handlePageChange = (currentPage: number) => {
    Router.push({
      pathname: '/',
      query: {
        borough: boroughQuery,
        cuisine: cuisineQuery,
        page: currentPage
      }
    });
  };
  // }, [boroughQuery, cuisineQuery, page]);

  return (
    <div className={styles.container}>
      <button onClick={handlePreviousPage}>&lt; Prev</button>
      <button onClick={handleNextPage}>Next &gt; </button>
    </div>
  );
};

export default Pagination;
