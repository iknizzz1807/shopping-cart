import { writable } from "svelte/store";
import type { CartInfo } from "../types";

export const cartInfo = writable<CartInfo>({
  totalItems: 0,
  items: [],
});
