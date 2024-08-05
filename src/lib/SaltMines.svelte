<script>
  import { onMount, onDestroy } from 'svelte';
  import { data } from '$lib/data';
  import { facilities } from '$lib/facilities';
  import { convertWeight } from '$lib/utils';

  let idleInterval;
  let saltSpill;

  let miningPower = $facilities.reduce((sum, item) => {
    return sum + (item.effect * item.amount);
  }, 0);

  function click() {
    data.update(d => {
      if (d) {
        d.salt.current += (1 + miningPower);
        d.salt.total += (1 + miningPower);
        d.deposit.currentDurability--;
        if (d.deposit.currentDurability <= 0) {
          d.deposit.currentDurability = d.deposit.maxDurability;
          d.salt.current += d.deposit.yield;
        }
        updateDeposit();
        return d;
      }
    });
    spillSalt();
  }

  onMount(() => {
    idleInterval = setInterval(() => {
      data.update(d => {
        if (d) {
          d.salt.current += (1 + miningPower);
          d.salt.total += (1 + miningPower);
          d.deposit.currentDurability--;
          if (d.deposit.currentDurability <= 0) {
            d.deposit.currentDurability = d.deposit.maxDurability;
            d.salt.current += d.deposit.yield;
          } 
          updateDeposit();
          return d;
        }
      });
      spillSalt();
    }, 1000)
  })

  onDestroy(() => {
    clearInterval(idleInterval);
  })

  $: durabilityValue = 100;

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

  function updateDeposit() {
    let percentage = ($data.deposit.currentDurability / $data.deposit.maxDurability) * 100;
    if (percentage >= 100) {
      durabilityValue = 100;
    } else if (percentage >= 75) {
      durabilityValue = 75;
    } else if (percentage >= 50) {
      durabilityValue = 50;
    } else if (percentage >= 25) {
      durabilityValue = 25;
    } else {
      durabilityValue = 100;
    }
  }
</script>

<div class="backdrop"></div>
{#if $data}
  <div class="encounter-provider">
    <div class="current-salt">
      {@html convertWeight($data.salt.current)} salt
    </div>
    <div class="salt-sec">+{@html convertWeight(miningPower + 1)} per second & click</div>
    <div role="button"
        class="deposit" 
        style="background-image:url('../deposit-{durabilityValue}.gif')"
        on:click={() => click()} 
        on:keydown={null} 
        tabindex="0"
    ></div>
    <div bind:this={saltSpill}/>
  </div>
{/if}

<style>
  .encounter-provider {
    position: absolute;
    top: 0rem;
    left: 0;
    width: 100%;
    height: 100vh;
    padding: 4rem;
  }
  .backdrop {
    position: fixed;
    top: 0rem;
    left: 0;
    width: 100%;
    height: 100vh;
    background-image: url('/bg.gif');
    background-position: center;
    background-size: cover;
    mix-blend-mode: luminosity;
    box-shadow: inset 0 0 8rem #000;
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
    width: 16rem;
    height: 16rem;
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
</style>