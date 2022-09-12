import type { GetServerSideProps } from 'next';
import RestaurantList from '../components/RestaurantList';
import { Restaurant } from '../types';
import styles from '../styles/Home.module.sass';
import SearchBar from '../components/SearchBar';
import { useState } from 'react';
import Pagination from '../components/Pagination';
import Chips from '../components/Chips';

type Props = {
  restaurants: Restaurant[];
  boroughs: string[];
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const searchQuery = context.query;
  const page = searchQuery.page === undefined ? 1 : searchQuery.page;

  let apiUrl = `${process.env.API_URL}/restaurants?page=${page}&perPage=10`;

  if (searchQuery.borough !== undefined) {
    apiUrl += `&borough=${searchQuery.borough}`;
  }
  if (searchQuery.cuisine !== undefined) {
    apiUrl += `&cuisine=${searchQuery.cuisine}`;
  }

  const res = await fetch(apiUrl);
  const restaurants = await res.json();

  const boroughRes = await fetch(`${process.env.API_URL}/boroughs`);
  const boroughs = await boroughRes.json();

  return { props: { restaurants, boroughs } };
};

const Home = ({ restaurants, boroughs }: Props) => {
  const [cuisineQuery, setCuisineQuery] = useState('');
  const [boroughQuery, setBoroughQuery] = useState('');
  const [page, setPage] = useState(1);

  return (
    <div className={styles.container}>
      <SearchBar
        boroughQuery={boroughQuery}
        setCuisine={setCuisineQuery}
        setPage={setPage}
      />
      <Chips
        boroughs={boroughs}
        selectedBorough={boroughQuery}
        cuisineQuery={cuisineQuery}
        setBorough={setBoroughQuery}
        setPage={setPage}
      />
      <RestaurantList restaurants={restaurants} />
      <Pagination
        cuisineQuery={cuisineQuery}
        boroughQuery={boroughQuery}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};

export default Home;
