<script lang="ts">
  import type { item } from "../types";
  import { cartInfo } from "../stores/CartInfo";
  export let item: item;

  let quantity: number = 0;
  let buttonEnable: boolean = false;
  $: buttonEnable = quantity !== 0;

  function increaseQuantity() {
    quantity++;
    cartInfo.update((currentCart) => {
      const existingItem = currentCart.items.find((i) => i.name === item.name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        currentCart.items.push({ ...item, quantity: 1 });
      }
      currentCart.totalItems++;
      return currentCart;
    });
  }

  function decreaseQuantity() {
    if (quantity > 0) {
      quantity--;
      cartInfo.update((currentCart) => {
        const existingItem = currentCart.items.find(
          (i) => i.name === item.name
        );
        if (existingItem) {
          existingItem.quantity--;
          if (existingItem.quantity === 0) {
            currentCart.items = currentCart.items.filter(
              (i) => i.name !== item.name
            );
          }
        }
        currentCart.totalItems--;
        return currentCart;
      });
    }
  }
</script>

<main>
  <div>
    <button on:click={decreaseQuantity} disabled={!buttonEnable}>-</button>
    {quantity}
    <button on:click={increaseQuantity}>+</button>
  </div>
</main>
