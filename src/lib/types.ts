export type item = {
  name: string;
  quantity: number;
  price: number;
};

export type CartInfo = {
  totalItems: number;
  items: item[];
};

export type cardInfo = item & {
  imgURL: string;
};
