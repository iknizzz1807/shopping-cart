import type { cardInfo } from "../types";

function createItem(imgURL: string, name: string, price: number): cardInfo {
  return {
    imgURL,
    name,
    quantity: 0,
    price,
  };
}

export const items: cardInfo[] = [
  createItem("#", "Apple", 0.5),
  createItem("#", "Banana", 0.3),
  createItem("#", "Orange", 0.7),
  createItem("#", "Grapes", 2.0),
  createItem("#", "Mango", 1.5),
];
