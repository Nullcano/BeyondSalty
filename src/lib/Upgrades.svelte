<script>
  import { data } from '$lib/data';
  import { upgrades } from '$lib/upgrades';
  import { facilities } from '$lib/facilities';
  import { convertWeight } from '$lib/utils';

  let facilityToUpgrade;

  function getUpgrade(upgrade) {
    if ($data.salt.current < upgrade.cost) {
      return;
    } else {
      facilityToUpgrade = $facilities.find(f => f.name == upgrade.facility);
      data.update(d => {
        if (d) {
          d.salt.current -= upgrade.cost;
          return d;
        }
      });
      facilities.update(f => {
        const index = f.findIndex(i => i.name === upgrade.facility);
        if (index !== -1) {
          f[index].effect = f[index].effect * 2;
        }
        return f;
      });
      upgrades.update(cs => {
        const index = cs.findIndex(c => c.name === upgrade.name);
        if (index !== -1) {
          cs[index].unlocked = false;
          cs[index].active = true;
        }
        return cs;
      });
    }
  }

  $: sortedUpgrades = $upgrades.filter(u => u.unlocked).sort((a, b) => a.cost - b.cost).slice(0, 5);
</script>

<div class="upgrades-list">
  <div class="label">Upgrades</div>
  <div class="upgrades">
    {#each sortedUpgrades as upgrade}
      <div role="button"
          tabindex="0"
          on:click={() => getUpgrade(upgrade)}
          on:keydown={null}
          class="upgrade {upgrade.amount > 0 ? '' : 'locked'}">
        <div class="icon" style="background-image:url('https://ui-avatars.com/api/?background=192b34&color=fff&name={upgrade.name}')"></div>
        <div class="info-card">
          <div class="icon" style="background-image:url('https://ui-avatars.com/api/?background=192b34&color=fff&name={upgrade.name}')"></div>
          <div class="info-card-title">{upgrade.name}</div>
          <div>{upgrade.description}</div>
          <div class="owned">Makes {upgrade.facility} twice as effective.</div>
          <div class="cost {$data.salt.current < upgrade.cost ? 'red' : 'green'}">Acquire for {@html convertWeight(upgrade.cost)} salt.</div>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .upgrades-list {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .label {
    padding: .25rem .5rem;
    text-transform: uppercase;
    background-color: rgba(255,255,255,.1);
    border-radius: 1rem;
  }
  .upgrades {
    width: 17rem;
    display: grid;
    grid-template-columns: repeat(5, 3rem);
    gap: .5rem;
  }
  .upgrade {
    position: relative;
    border-radius: 50%;
    cursor: pointer;
  }
  .upgrade:hover {
    background-color: rgba(255,255,255,.1);
  }
  .icon {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-position: center;
    background-size: cover;
  }
  .info-card {
    position: absolute;
    top: 100%;
    left: 50%;
    width: 20rem;
    padding: 1rem;
    transform: translateX(-50%);
    background-color: var(--dark-100);
    box-shadow: 0 0 1rem var(--dark-400);
    border-radius: 1rem;
    display: none;
    flex-direction: column;
    gap: 1rem;
  }
  .info-card-title {
    font-size: 1.5rem;
  }
  .upgrade:hover .info-card {
    display: flex;
  }
  .cost.red {
    color: hsl(0, 60%, 60%);
  }
  .cost.green {
    color: hsl(140, 60%, 60%);
  }
</style>