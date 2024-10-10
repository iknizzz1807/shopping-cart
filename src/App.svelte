<script lang="ts">
  import ShoppingCard from "./lib/components/+ShoppingCard.svelte";
  import { items } from "./lib/stores/Items";
  import Cart from "./lib/components/+Cart.svelte";
</script>

<main>
  <div class="container">
    <div class="items">
      <h1>Deserts</h1>
      {#each items as item}
        <ShoppingCard currentCardInfo={item} />
      {/each}
    </div>
    <div class="cart">
      <h1>Cart</h1>
      <Cart />
    </div>
  </div>
</main>

<style>
  .container {
    display: flex;
    flex-direction: row;
  }

  .cart {
    text-align: center;
    border-left: skyblue solid 4px;
  }

  .items {
    width: 50%;
  }
</style>
