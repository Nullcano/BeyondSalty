<script>
  import { data } from '$lib/data'
</script>

<div class="gold-panel">
  {#if $data}
    { $data.gold } gold
  {/if}
</div>

<style>
  .gold-panel {
    padding: 1rem;
    font-size: 2rem;
    background: rgba(0,0,0,.5);
    color: hsl(30, 100%, 60%);
    text-align: center;
    clip-path: polygon(1rem 0%, calc(100% - 1rem) 0%, 100% 1rem, 100% calc(100% - 1rem), calc(100% - 1rem) 100%, 1rem 100%, 0% calc(100% - 1rem), 0% 1rem);
  }
</style>