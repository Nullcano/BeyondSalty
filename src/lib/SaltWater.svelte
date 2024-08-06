<script>
  import { onMount } from 'svelte';
  import { data } from '$lib/data';
  import { convertMl } from '$lib/utils';

  $: saltWater = 0;
  let saltWaterInterval;
  
  function drain() {
    data.update(d => {
      d.salt.current += ((d.salt.current / 100) * (saltWater / 100));
      return d;
    })
    saltWater -= saltWater;
  }

  onMount(() => {
    saltWaterInterval = setInterval(() => {
      if (saltWater >= 1000000) {
        return;
      }
      saltWater++;
    }, 50)
  });
</script>

<div>
  <div class="container">
    <div class="water" style="height: {saltWater/100}vh;"></div>
  </div>
  <div class="content">
    <div class="info">
      <div>Salt water level</div>
      <div>{convertMl(saltWater)}</div>
    </div>
    <button class="drain" on:click={drain}>Drain</button>
  </div>
</div>

<style>
  .container {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    pointer-events: none;
  }
  .water {
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: #1E90FF;
    mix-blend-mode: overlay;
    transition: height .2s linear;
    z-index: 0;
  }
  .content {
    position: absolute;
    bottom: 2rem;
    left: 2rem;
    color: #fff;
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  .drain {
    padding: .5rem 1rem;
    background-color: transparent;
    color: inherit;
    font-size: 1rem;
    text-transform: uppercase;
    border: 2px solid var(--dark-400);
    border-radius: 2rem;
    cursor: pointer;
  }
</style>