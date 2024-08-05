<script>
  import { onMount, onDestroy } from "svelte";
  import { data } from '$lib/data';

  let posTop, posLeft;
  let isVisible = false;
  let spawnInterval;

  function spawnBar() {
    isVisible = true;
    posTop = `${Math.floor(Math.random() * 100)}%`;
    posLeft = `${Math.floor(Math.random() * 100)}%`;
    setTimeout(() => {
      isVisible = false;
    }, 30000);
  }

  function handleClick() {
    isVisible = false;
    data.update(d => {
      d.salt.current *= 2;
      return d;
    })
  }

  onMount(() => {
    spawnBar();
    spawnInterval = setInterval(() => {
      spawnBar();
    }, 60000)
  })

  onDestroy(() => {
    clearInterval(spawnInterval);
  })
</script>

{#if isVisible}
  <div class="spinner" style="top:{posTop};left:{posLeft}">
    <div role="button"
        tabindex="0"
        class="salt-bar" 
        on:click={handleClick}
        on:keydown={null}
    >
    </div>
  </div>
{/if}

<style>
  .salt-bar {
    width: 2rem;
    height: 2rem;
    background: url('/salt-bar.gif');
    background-size: cover;
    cursor: pointer;
  }
  .salt-bar:hover {
    transform: scale(1.2);
  }
  .spinner {
    position: fixed;
    animation: spin 2s linear infinite;
    z-index: 100;
  }
  @keyframes spin {
    from { transform: rotate(0deg) }
    to { transform: rotate(360deg) }
  }
</style>