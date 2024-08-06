<script>
  import { onMount, onDestroy } from 'svelte';
  import { data } from '$lib/data';
  import { facilities } from '$lib/facilities';
  import { convertWeight } from '$lib/utils';

  let idleInterval;
  let saltSpill;
  const maxDurability = 100;
  let currentDurabilityValue = 100;
  let durabilityValue = 75;

  let miningPower = $facilities.reduce((sum, item) => {
    return sum + (item.effect * item.efficiency);
  }, 0);

  function click() {
    data.update(d => {
      if (d) {
        d.salt.current += (1 + miningPower);
        d.salt.total += (1 + miningPower);
        return d;
      }
    });
    spillSalt();
    currentDurabilityValue--;
  }

  onMount(() => {
    idleInterval = setInterval(() => {
      data.update(d => {
        if (d) {
          d.salt.current += (1 + miningPower);
          d.salt.total += (1 + miningPower);
          return d;
        }
      });
      spillSalt();
      currentDurabilityValue--;
    }, 1000)
  })

  onDestroy(() => {
    clearInterval(idleInterval);
  })

  function spillSalt() {
    const child = document.createElement('div');
    child.className = 'spill';
    child.style.left = `calc(50% - ${Math.floor(Math.random() * 4)}rem)`;
    saltSpill.appendChild(child);
    setTimeout(() => {
      if (saltSpill) {
        saltSpill.removeChild(child);
      }
    }, 2000);
  }

  $: {
    if (currentDurabilityValue <= 0) {
      currentDurabilityValue = maxDurability;
    }

    if (currentDurabilityValue <= 100 && currentDurabilityValue >= 66) {
      durabilityValue = 75;
    } else if (currentDurabilityValue < 66 && currentDurabilityValue >= 33) {
      durabilityValue = 50;
    } else if (currentDurabilityValue < 33 && currentDurabilityValue >= 0) {
      durabilityValue = 25;
    }
  }
</script>

{#if $data}
  <div class="encounter-provider">
    <div class="current-salt">
      {@html convertWeight($data.salt.current)} salt
    </div>
    <div class="salt-sec">+{@html convertWeight(miningPower + 1)} per second & click</div>
    <div role="button"
        class="deposit" 
        style="background-image:url('/assets/deposit-{durabilityValue}.svg')"
        on:click={() => click()} 
        on:keydown={null} 
        tabindex="0"
    ></div>
    <div class="salt-spill" bind:this={saltSpill}/>
  </div>
{/if}

<style>
  .encounter-provider {
    position: absolute;
    top: 0rem;
    left: 0;
    width: 100%;
    height: 100vh;
    padding: 5rem;
  }
  .current-salt, .salt-sec {
    position: absolute;
    top: 50%;
    left: 50%;
  }
  .current-salt {
    transform: translate(-50%, calc(-50% - 10rem));
  }
  .salt-sec {
    transform: translate(-50%, calc(-50% + 10rem));
    color: hsl(180, 60%, 60%);
    font-size: 1.25rem;
  }
  .deposit {
    position: absolute;
    width: 12rem;
    height: 12rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    background-position: center;
    background-size: contain;
    image-rendering: pixelated;
    cursor: pointer;
    transition: all .1s linear;
  }
  .deposit:hover {
    transform: translate(-50%, -50%) scale(1.2);
  }
  .deposit:active {
    transform: translate(-50%, -50%) scale(.8);
  }
  .salt-spill {
    pointer-events: none;
  }
</style>