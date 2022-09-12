import Link from 'next/link';
import styles from '../styles/RestaurantCard.module.sass';
import { Restaurant } from '../types';

type Props = {
  key: number;
  restaurant: Restaurant;
};

const RestaurantCard = ({ restaurant }: Props) => {
  return (
    <Link href="/restaurant/[id]" as={`/restaurant/${restaurant._id}`}>
      <div className={styles.container}>
        <a className={styles.link}>
          <div className={styles.restaurantName}>{restaurant.name}</div>
          <div>
            Address: {restaurant.address.building} {restaurant.address.street}
          </div>
          <div>Borough: {restaurant.borough}</div>
          <div>Cuisine: {restaurant.cuisine}</div>
        </a>
      </div>
    </Link>
  );
};

export default RestaurantCard;
