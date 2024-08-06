<script>
  import { data } from '$lib/data';
  import { facilities } from '$lib/facilities';
  import { convertWeight, createSlug } from '$lib/utils';

</script>

<div class="facilities-list">
  <div class="title">
    <div>Facilities</div>
  </div>
  <div class="facilities">
    {#each $facilities as facility}
      <a href="/facilities/{createSlug(facility.name)}" class="facility">
        <div class="header" style="background-image:url('/assets/{createSlug(facility.name)}.png')">
          <div class="icon-provider">
            <div class="icon" style="background-image:url('/assets/icons/{facility.icon}.svg')"></div>
          </div>
          <div class="name">{facility.name}</div>
          {#if $data.salt.current > facility.cost}
            <div class="investable">✔ Invest</div>
          {/if}
        </div>
        <div class="body">
          <div class="description">{facility.description}</div>
        </div>
      </a>
    {/each}
  </div>
</div>

<style>
  .facilities-list {
    position: relative;
    padding-top: 9rem;
    padding-inline: 2rem;
    padding-bottom: 2rem;
    height: 100vh;
    overflow-y: auto;
  }
  .title {
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-transform: uppercase;
    font-size: 2rem;
  }
  .facilities {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
    gap: 1rem;
  }
  .facility {
    position: relative;
    background-color: var(--dark-200);
    background-position: center;
    background-size: cover;
    transition: all .1s linear;
    text-decoration: none;
    color: #fff;
    border: 1px solid rgba(255,255,255,.1);
    border-radius: 1rem;
    overflow: hidden;
    cursor: pointer;
  }
  .facility:hover {
    background-color: var(--dark-300);
    box-shadow: 0 0 2rem rgba(255,255,255,.1);
  }
  .facility:hover .header::before {
    background: linear-gradient(to bottom, transparent, var(--dark-300));
  }
  .header {
    position: relative;
    padding-top: 6rem;
    padding-inline: 1rem;
    display: flex;
    align-items: center;
    gap: .5rem;
    background-position: center;
    background-size: cover;
  }
  .header::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, transparent, var(--dark-200));
  }
  .icon-provider {
    position: absolute;
    top: 1rem;
    width: 4rem;
    height: 4rem;
    display: grid;
    place-items: center;
    border-radius: 1rem;
    background: radial-gradient(var(--dark-400), var(--dark-100));
    border: 2px solid rgba(255,255,255,.1);
  }
  .icon {
    width: 2rem;
    height: 2rem;
    background-position: center;
    background-size: cover;
  }
  .name {
    position: relative;
    font-size: 1.2rem;
    text-transform: uppercase;
    color: #fff;
  }
  .investable {
    position: absolute;
    top: .5rem;
    right: 1rem;
    padding: .25rem .5rem;
    font-size: .8rem;
    text-transform: uppercase;
    text-shadow: 0 0 .25rem #fff;
    background-color: rgba(0,0,0,.5);
    border-radius: 1rem;
  }
  .body {
    padding: 1rem;
    opacity: .7;
  }
</style>