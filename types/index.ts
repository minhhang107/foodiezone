export interface Address {
  building: string;
  street: string;
  coord: number[];
}

export interface Grade {
  date: string;
  grade: string;
  score: number;
}

export interface Restaurant {
  _id: string;
  restaurant_id: string;
  name: string;
  address: Address;
  borough: string;
  cuisine: string;
  grades: Grade[];
}
