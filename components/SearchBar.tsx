import Image from 'next/image';
import Router from 'next/router';
import { FormEvent, useState } from 'react';
import styles from '../styles/SearchBar.module.sass';

type Props = {
  boroughQuery: string;
  setCuisine: (query: string) => void;
  setPage: (page: number) => void;
};
const SearchBar = ({ boroughQuery, setCuisine, setPage }: Props) => {
  const [searchString, setSearchString] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setCuisine(searchString);
    setPage(1);
    Router.push({
      pathname: '/',
      query: {
        cuisine: searchString,
        borough: boroughQuery,
        page: 1
      }
    });
    setSearchString('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="enter a cuisine"
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
      />
      <button type="submit" className={styles.searchButton}>
        <Image
          className={styles.searchIcon}
          src="/search2.png"
          alt="search"
          width={25}
          height={25}
        />
      </button>
    </form>
  );
};

export default SearchBar;
