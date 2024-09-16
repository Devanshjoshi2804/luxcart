export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
    discount?: number;
    rating?: number;
    reviews?: number;
  }
