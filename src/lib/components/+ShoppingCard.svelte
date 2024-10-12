<script lang="ts">
  import AddToCartButton from "./+AddToCartButton.svelte";
  import type { cardInfo } from "../types";

  export let currentCardInfo: cardInfo;
</script>

<main>
  <div class="card">
    <div class="card-image-container">
      <img src={currentCardInfo.imgURL} alt="item" class="card-image" />
      <div class="add-to-cart-button">
        <AddToCartButton item={currentCardInfo} />
      </div>
    </div>
    <div class="card-name">{currentCardInfo.name}</div>
    <div class="card-price">${currentCardInfo.price}</div>
  </div>
</main>

<style>
  .card {
    display: flex;
    flex-direction: column;
    width: 200px;
  }

  .card-image {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 12px;
  }

  .card-name {
    font-weight: 640;
  }

  .card-price {
    font-weight: 700;
    color: coral;
  }

  .add-to-cart-button {
    text-align: center;
  }

  .card-image-container {
  }
</style>
