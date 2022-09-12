import styles from '../styles/RestaurantList.module.sass';
import RestaurantCard from './RestaurantCard';
import { Restaurant } from '../types';

const RestaurantList = ({ restaurants }: { restaurants: Restaurant[] }) => {
  return (
    <div>
      <div className={styles.container}>
        {restaurants.map((restaurant: Restaurant, key: number) => (
          <RestaurantCard key={key} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
