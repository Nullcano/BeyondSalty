<script>
  import { data } from '$lib/data';
  import { facilities } from '$lib/facilities';
  import { convertWeight } from '$lib/utils';
  import Debug from "$lib/Debug.svelte";

  $: miningPower = $facilities.reduce((sum, item) => {
    return sum + (item.effect * item.efficiency);
  }, 0);
</script>

<div class="top-section">
  <div></div>
  <div class="title">
    <img src="/assets/title-logo.svg" alt="Beyond Salty">
  </div>
  <div class="menu">
    <a href="/">
      <img src="/assets/mines.svg" alt="Mines">
      <span>Mines</span>
    </a>
    <a href="/facilities">
      <img src="/assets/facilities.svg" alt="Facilities">
      <span>Facilities</span>
    </a>
  </div>
  <div class="display-current-salt">
    <div class="salt-icon"></div>
    <div>{@html convertWeight($data.salt.current)}</div> 
    <div class="dropdown">+{@html convertWeight(miningPower + 1)} per sec / click</div>
  </div>
  <div class="menu">
    <Debug />
    <a href="/settings">Settings</a>
  </div>
</div>

<style>
  .top-section {
    position: fixed;
    top: 1rem;
    left: 1rem;
    right: 1rem;
    height: 4rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 10;
  }
  .title {
    position: fixed;
    top: 2rem;
    left: 2rem;
  }
  .title img {
    height: 2rem;
  }
  .menu {
    display: flex;
    align-items: center;
    gap: .5rem;
  }
  .menu a {
    padding: .25rem 1rem;
    height: 2rem;
    color: white;
    display: flex;
    align-items: center;
    gap: .5rem;
    background: rgba(0,0,0,.5);
    backdrop-filter: blur(4px);
    border: 1px solid rgba(255,255,255,.25);
    border-radius: 2rem;
    border-radius: 4rem;
    text-decoration: none;
  }
  .menu a img {
    width: 1.5rem;
    opacity: .75;
  }
  .display-current-salt {
    position: relative;
    width: 16rem;
    height: 2rem;
    padding: .25rem 1rem;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: .5rem;
    background: linear-gradient(to right, rgba(0,0,0,.5), transparent);
    backdrop-filter: blur(4px);
    border-radius: 2rem;
  }
  .dropdown {
    display: none;
    font-size: .8rem;
  }
  .display-current-salt:hover .dropdown {
    position: absolute;
    top: calc(100% + 1rem);
    left: 0;
    padding: .25rem .5rem;
    border-radius: 1rem;
    background: var(--dark-100);
    display: block;
    z-index: 10;
  }
  .salt-icon {
    margin-top: .25rem;
    width: 1rem;
    height: 1rem;
    background: url('/spill.gif');
    background-size: cover;
  }
</style>