import dynamic from 'next/dynamic';
import type { GetServerSideProps } from 'next';
import styles from '../../../styles/Restaurant.module.sass';
import { Grade, Restaurant } from '../../../types';

const Map = dynamic(() => import('../../../components/Map'), {
  loading: () => <p>Map is loading</p>,
  ssr: false
});

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    `${process.env.API_URL}/restaurant/${context.query!.id}`
  );
  const restaurant = await res.json();
  return { props: { restaurant } };
};

const Restaurant = ({ restaurant }: { restaurant: Restaurant }) => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.name}>{restaurant.name}</div>
        <div>
          {restaurant.address.building} {restaurant.address.street}
        </div>
        <div
          className={`${styles.grade} ${
            restaurant.grades.length < 5 ? styles.gradeLess : ''
          }`}
        >
          {restaurant.grades.map((item: Grade) => (
            <div
              key={item.date}
              className={`${styles.gradeItem} ${
                restaurant.grades.length < 5 ? styles.gradeItemLess : ''
              }`}
            >
              <div>Grade: {item.grade}</div>
              <div>Score: {item.score}</div>
              <div>Posted on: {new Date(item.date).toLocaleDateString()}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.mapContainer}>
        <Map coord={restaurant.address.coord} />
      </div>
    </div>
  );
};

export default Restaurant;
