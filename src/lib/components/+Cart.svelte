<script lang="ts">
  import { cartInfo } from "../stores/CartInfo";

  let totalMoney: number = 0;
  let buttonEnable: boolean = false;

  // Automatically update buttonEnable when cartInfo changes
  $: buttonEnable = $cartInfo.totalItems !== 0;
  $: totalMoney = $cartInfo.items.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );
</script>

<main>
  <p>Total items: {$cartInfo.totalItems}</p>
  {#each $cartInfo.items as item}
    <p>{item.name} - {item.quantity} - {item.quantity * item.price}</p>
    <h3>Total money: {totalMoney}</h3>
  {/each}
  <button disabled={!buttonEnable}>Buy now!</button>
  <!-- Show popup congrat on buying successfully! -->
</main>
