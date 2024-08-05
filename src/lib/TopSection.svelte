<script>
  import { data } from '$lib/data';
  import { facilities } from '$lib/facilities';
  import { convertWeight } from '$lib/utils';
  import Debug from "$lib/Debug.svelte";

  $: miningPower = $facilities.reduce((sum, item) => {
    return sum + (item.effect * item.amount);
  }, 0);
</script>

<div class="top-section">
  <div class="left">
    <div class="title">
      <img src="/logo.gif" alt="Beyond Salty">
    </div>
    <div class="display-current-salt">
      <div class="salt-icon"></div>
      <div class="flex-col">
        <div>{@html convertWeight($data.salt.current)}</div> 
        <div>+{@html convertWeight(miningPower + 1)} / sec & click</div>
      </div>
    </div>
  </div>
  <div class="menu">
    <a href="/">Mines</a>
    <a href="/facilities">Facilities</a>
  </div>
  <div class="menu">
    <Debug />
    <a href="/settings">Settings</a>
  </div>
</div>

<style>
  .top-section {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 4rem;
    padding-inline: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(to bottom, var(--dark-100), transparent);
    z-index: 10;
  }
  .left {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  .title {
    display: flex;
    align-items: center;
  }
  .title img {
    height: 39px;
    mix-blend-mode: overlay;
  }
  .menu {
    display: flex;
    align-items: center;
    gap: .5rem;
  }
  .menu a {
    padding: .25rem .5rem;
    background: var(--dark-200);
    color: white;
    border-radius: 1rem;
    text-decoration: none;
  }
  .display-current-salt {
    width: 16rem;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: .5rem;
    font-size: 1rem;
  }
  .flex-col {
    display: flex;
    flex-direction: column;
  }
  .salt-icon {
    margin-top: .25rem;
    width: 1rem;
    height: 1rem;
    background: url('/spill.gif');
    background-size: cover;
  }
  .flex-col div:nth-child(2) {
    font-size: .8rem;
  }
</style>