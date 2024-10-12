<script lang="ts">
  import ShoppingCard from "./lib/components/+ShoppingCard.svelte";
  import { items } from "./lib/stores/Items";
  import Cart from "./lib/components/+Cart.svelte";
</script>

<main>
  <div class="container">
    <div class="items">
      <div class="title">Deserts</div>
      {#each items as item}
        <ShoppingCard currentCardInfo={item} />
      {/each}
    </div>
    <div>
      <div class="title">Cart</div>
      <Cart />
    </div>
  </div>
</main>

<style>
  .container {
    display: flex;
    flex-direction: row;
    padding: 40px 40px;
  }

  .title {
    font-size: 32px;
    font-weight: 700;
  }

  .items {
    width: 50%;
  }
</style>
