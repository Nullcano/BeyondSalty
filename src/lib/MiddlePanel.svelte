<script>
  import GoldPanel from '$lib/GoldPanel.svelte';
  import PowerPanel from '$lib/PowerPanel.svelte';
  import Encounter from '$lib/Encounter.svelte';
</script>

<div class="middle-panel">
  <div class="top">
    <GoldPanel />
    <PowerPanel />
  </div>
  <Encounter />
</div>

<style>
  .middle-panel {
    position: relative;
  }
  .top {
    margin-block: .5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: .5rem;
    pointer-events: none;
  }
</style>