<script>
  import { onMount, onDestroy } from "svelte";
  import { announcements } from "$lib/announcements";

  let ticker;
  let announcementInterval;

  function startAnimation() {
    const randomIndex = Math.floor(Math.random() * announcements.length);
    const child = document.createElement('div');
    child.className = 'marquee-content';
    child.textContent = announcements[randomIndex];
    ticker.appendChild(child);
    setTimeout(() => {
      if (ticker) {
        ticker.removeChild(child);
      }
    }, 30000);
  }
  onMount(() => {
    startAnimation();
    announcementInterval = setInterval(() => {
      startAnimation();
    }, 45000)
  });
  onDestroy(() => {
    clearInterval(announcementInterval);
  })
</script>

<div class="marquee" bind:this={ticker}>
  <div class="icon-provider">
    <div class="icon"></div>
  </div>

</div>

<style>
  .marquee {
    position: fixed;
    top: 4rem;
    left: 1rem;
    right: 1rem;
    width: calc(100vw - 2rem);
    height: 2rem;
    white-space: nowrap;
    overflow: hidden;
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr;
    background: hsla(200, 35%, 90%, .1);
    backdrop-filter: blur(4px);
    border-radius: 60rem;
    line-height: 1;
    border: 1px solid rgba(255,255,255,.1);
    z-index: 10;
  }
  .icon-provider {
    position: relative;
    width: 2rem;
    height: 2rem;
    display: grid;
    place-items: center;
    background: var(--dark-200);
    border-right: 1px solid rgba(255,255,255,.1);
    z-index: 1;
  }
  .icon {
    width: 1rem;
    height: 1rem;
    background: url('/bulletin.gif');
    background-size: cover;
  }
</style>