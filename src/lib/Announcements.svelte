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
    <span class="label">BrineWire</span>
  </div>

</div>

<style>
  .marquee {
    position: fixed;
    top: 5rem;
    left: 1rem;
    right: 1rem;
    width: calc(100vw - 2rem);
    height: 2rem;
    white-space: nowrap;
    overflow: hidden;
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr;
    background: hsla(200, 35%, 20%, .5);
    border: 1px solid rgba(255,255,255,.25);
    backdrop-filter: blur(4px);
    line-height: 1;
    z-index: 9;
  }
  .icon-provider {
    position: relative;
    height: 100%;
    padding-inline: .5rem;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: .5rem;
    align-items: center;
    background: var(--dark-200);
    border-right: 1px solid rgba(255,255,255,.5);
    z-index: 1;
  }
  .icon {
    width: 1.5rem;
    height: 1.5rem;
    background: url('/assets/brinewire.svg');
    background-size: cover;
    transform: rotate(-90deg);
    animation: wink 2s linear infinite;
  }
  @keyframes wink {
    0% { transform: rotate(-90deg) }
    50% { transform: rotate(0deg) }
    100% { transform: rotate(-90deg) }
  }
</style>