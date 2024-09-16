export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
    description: string;
    discount?: number;
    rating?: number;
    reviews?: number;
  }
