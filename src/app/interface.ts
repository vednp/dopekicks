export interface cardProductInterface {
  _id: string;
  price: number;
  name: string;
  slug: string;
  categoryName: string;
  imageUrl: string;
  description: string;
}

export interface productDetails {
  0: {
    description: string;
    imageUrl: string;
    name: string;
    price: number;
    categoryName: string;
    _id: string;
  };
}

export interface cartProduct {
  categoryName: string;
  imageUrl: string;
  name: string;
  price: number;
  slug: string;
  _id: string;
  quantity: number;
}
