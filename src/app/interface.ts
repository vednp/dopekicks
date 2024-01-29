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
  description: string;
  imageUrl: string;
  name: string;
  price: number;
  categoryName: string;
  _id: string;
  slug: string;
  quantity: number;
}

export interface cartProduct {
  categoryName: string;
  description: string;
  imageUrl: string;
  name: string;
  price: number;
  slug: string;
  _id: string;
  quantity: number;
}
