<script lang="ts">
  import type { item } from "../types";
  import { cartInfo } from "../stores/CartInfo";
  export let item: item;

  let quantity: number = 0;
  let addToCartLabel: boolean = true;
  $: addToCartLabel = quantity === 0;

  function increaseQuantity() {
    quantity++;
    cartInfo.update((currentCart) => {
      const existingItem = currentCart.items.find((i) => i.name === item.name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        currentCart.items.push({ ...item, quantity: 1 });
        addToCartLabel = false;
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
  <div class="container">
    {#if addToCartLabel}
      <button on:click={increaseQuantity} class="add-to-cart-btn"
        >Add to cart</button
      >
    {:else}
      <div class="change-quantity-btn">
        <button on:click={decreaseQuantity} class="small-btn">-</button>
        <div>{quantity}</div>
        <button on:click={increaseQuantity} class="small-btn">+</button>
      </div>
    {/if}
  </div>
</main>

<style>
  .container {
    display: flex;
    justify-content: center;
  }
  .add-to-cart-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 32px;
    border-radius: 24px;
    font-size: 12px;
    font-weight: 560;
    cursor: pointer;
    background-color: white;
    border: salmon 1px solid;
  }

  .change-quantity-btn {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    height: 30px;
    border: 1px black solid;
    border-radius: 24px;
    font-size: 12px;
    font-weight: 560;
  }
  .small-btn {
    border-radius: 28px;
    cursor: pointer;
    border: 1px solid black;
  }
</style>
