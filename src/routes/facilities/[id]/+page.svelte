<script>
  import { page } from '$app/stores';
  import { data } from '$lib/data';
  import { facilities } from '$lib/facilities';
  import { upgrades } from '$lib/upgrades';
  import { convertWeight, createSlug } from '$lib/utils';
  import { onMount } from 'svelte';

  function getFacility(facility, amount) {
    if ($data.salt.current < (facility.cost * amount)) {
      return;
    } else {
      data.update(d => {
        if (d) {
          for (let i = 0; i < amount; i++) {
            d.salt.current -= facility.cost;
            d.salt.second += facility.effect;
            d.salt.click += facility.effect; 
          }
          return d;
        }
      });
      facilities.update(cs => {
        const index = cs.findIndex(c => c.name === facility.name);
        if (index !== -1) {
          for (let i = 0; i < amount; i++) { 
            cs[index].amount++;
            cs[index].cost = Math.floor((cs[index].cost * 1.5) + 1);
          }
        }
        return cs;
      });
    }
  }
  
  let currentFacility = $facilities.find(f => createSlug(f.name) === $page.params.id);
  let currentUpgrades = $upgrades.filter(u => u.facility === currentFacility.name);

  console.log(currentUpgrades)
</script>

{#if currentFacility}
  <div class="facility-page">
    <div class="splash" style="background-image:url('/{createSlug(currentFacility.name)}.gif')"></div>
    <div>
      <div class="header">
        <div class="flex">
          <div class="title">{currentFacility.name}</div>
          <div class="efficiency-label">Efficiency {currentFacility.effect * currentFacility.amount}</div>  
        </div>
        <div class="description">{currentFacility.description}</div>
        <div class="owned">
          <div>The {currentFacility.name.toLowerCase()} is contributing</div>
          <div>{@html convertWeight(currentFacility.effect * currentFacility.amount)} salt per second and click in total</div>
        </div>
      </div>
      <div class="body">
        <div class="sub-title">Invest</div>
        <div class="invest-options">
          <div role="button"
              tabindex="0"
              on:click={() => getFacility(currentFacility, 1)}
              on:keydown={null}
              class="invest cost {$data.salt.current < (currentFacility.cost * 1) ? 'red' : 'green' }"
          >
            <div>+1 efficiency</div>
            <div>Invest {@html convertWeight((currentFacility.cost * 1))} salt</div>
          </div>
          <div role="button"
              tabindex="0"
              on:click={() => getFacility(currentFacility, 10)}
              on:keydown={null}
              class="invest cost {$data.salt.current < (currentFacility.cost * 10) ? 'red' : 'green' }"
          >
            <div>+10 efficiency</div>
            <div>Invest {@html convertWeight((currentFacility.cost * 10))} salt</div>
          </div>
          <div role="button"
              tabindex="0"
              on:click={() => getFacility(currentFacility, 100)}
              on:keydown={null}
              class="invest cost {$data.salt.current < (currentFacility.cost * 100) ? 'red' : 'green' }"
          >
            <div>+100 efficiency</div>
            <div>Invest {@html convertWeight((currentFacility.cost * 100))} salt</div>
          </div>
        </div>
      </div>
    </div>
    <div class="upgrades-provider">
      <div class="sub-title">Upgrades</div>
      <div class="upgrades">
        {#each currentUpgrades as upgrade}
          {#if (currentFacility.effect * currentFacility.amount) >= upgrade.requirement}
            <div class="upgrade">
              <div class="icon" style="background-image:url('/assets/icons/{upgrade.icon}.svg')"></div>
              <div>
                <div>{upgrade.name}</div>
                <div>{upgrade.description}</div>
              </div>
            </div>
            {:else}
            <div class="upgrade">
              <div class="icon" style="background-image:url('/assets/icons/{upgrade.icon}.svg')"></div>
              <div>
                <div>{upgrade.name}</div>
                <div>Available at Efficiency {upgrade.requirement}</div>
              </div>
            </div>
          {/if}
        {/each}
      </div>
    </div>
  </div>
{/if}

<style>
  .facility-page {
    position: relative;
    padding-top: 6rem;
    background-color: var(--dark-100);
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .splash {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 16rem;
    background-position: center;
    background-size: cover;
  }
  .splash::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, transparent, var(--dark-100));
  }
  .header {
    position: relative;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }
  .title {
    font-size: 2rem;
    text-transform: uppercase;
  }
  .efficiency-label {
    padding: .25rem 1rem;
    text-transform: uppercase;
    background: var(--dark-100);
    font-size: 1.25rem;
    border-radius: 2rem;
  }
  .description {
    opacity: .7;
  }
  .body {
    position: relative;
    padding: 2rem;
    padding-top: 0;
  }
  .sub-title {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
  .owned {
    padding: 1rem;
    line-height: 1.5;
    background: var(--dark-200);
    border-left: 4px solid var(--dark-400);
  }
  .invest-options {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .invest {
    padding: 1rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    gap: .5rem;
    cursor: pointer;
  }
  .invest div:nth-child(1) {
    font-size: 1.5rem;
  }
  .upgrades-provider {
    padding: 2rem;
    position: relative;
  }
  .upgrades {
    padding: .5rem;
    display: flex;
    flex-direction: column;
    gap: .5rem;
    height: calc(100vh - 12rem);
    background-color: var(--dark-200);
    border-radius: 1rem;
    overflow-y: auto;
  }
  .upgrade {
    padding: 1rem;
    background: var(--dark-300);
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1rem;
    border-radius: 1rem;
    cursor: pointer;
  }
  .upgrade:hover {
    background-color: var(--dark-400);
  }
  .upgrade div:nth-child(1) {
    font-size: 1.25rem;
  }
  .upgrade .icon {
    width: 3rem;
    height: 3rem;
    background-size: cover;
  }
  .cost.green {
    background: linear-gradient(135deg, hsl(140, 50%, 20%), hsl(140, 50%, 40%));
  }
  .cost.green:hover {
    background: linear-gradient(135deg, hsl(140, 50%, 20%), hsl(140, 50%, 50%), hsl(140, 50%, 40%));
  }
  .cost.red {
    background: linear-gradient(135deg, hsl(10, 50%, 20%), hsl(10, 50%, 40%));
    cursor: not-allowed;
  }
</style>