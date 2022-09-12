import Router from 'next/router';
import styles from '../styles/Chips.module.sass';
import BoroughChip from './BoroughChip';

type Props = {
  boroughs: string[];
  selectedBorough: string;
  cuisineQuery: string;
  setBorough: (borough: string) => void;
  setPage: (page: number) => void;
};

const Chips = ({
  boroughs,
  selectedBorough,
  cuisineQuery,
  setBorough,
  setPage
}: Props) => {
  const handleChipSelect = (borough: string) => {
    setBorough(borough);
    setPage(1);
    Router.push({
      pathname: '/',
      query: {
        borough: borough,
        cuisine: cuisineQuery,
        page: 1
      }
    });
  };

  return (
    <div className={styles.container}>
      {boroughs.map((borough, key) => (
        <BoroughChip
          key={key}
          borough={borough}
          selectedBorough={selectedBorough}
          handleChipSelect={handleChipSelect}
        />
      ))}
      <button className={styles.chip} onClick={() => handleChipSelect('')}>
        <div>Clear</div>
      </button>
    </div>
  );
};

export default Chips;
