<script>
  import { data } from '$lib/data';
  import { facilities } from '$lib/facilities';
  import { convertWeight, createSlug } from '$lib/utils';

</script>

<div class="facilities-list">
  <div class="label">
    <div>Facilities</div>
  </div>
  <div class="facilities">
    {#each $facilities as facility}
      <a href="/facilities/{createSlug(facility.name)}"
          class="facility {facility.amount > 0 ? '' : 'locked'}"
      >
        <div class="header" style="background-image:url('/{createSlug(facility.name)}.gif')">
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
    top: 5rem;
    height: calc(100vh - 5rem);
    background-color: var(--dark-100);
    border-left: 1px solid rgba(255,255,255,.1);
    overflow-x: visible;
    overflow-y: auto;
  }
  .label {
    margin-top: 2rem;
    padding-inline: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-transform: uppercase;
    font-size: 2rem;
  }
  .facilities {
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
    gap: 2rem;
  }
  .facility {
    position: relative;
    background-color: var(--dark-200);
    background-position: center;
    background-size: cover;
    border-radius: 1rem;
    transition: all .1s linear;
    text-decoration: none;
    color: #fff;
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
    padding-top: 2rem;
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
    font-size: .8rem;
    text-transform: uppercase;
    text-shadow: 0 0 .25rem #fff;
  }
  .body {
    padding: 1rem;
    opacity: .7;
  }
</style>