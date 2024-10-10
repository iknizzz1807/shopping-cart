<script lang="ts">
  import AddToCartButton from "./+AddToCartButton.svelte";
  import type { cardInfo } from "../types";

  export let currentCardInfo: cardInfo;
</script>

<main>
  <p>img: {currentCardInfo.imgURL}</p>
  <p>Name: {currentCardInfo.name}</p>
  <p>Price: ${currentCardInfo.price}.00</p>
  <AddToCartButton item={currentCardInfo} />
</main>
