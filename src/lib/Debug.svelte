<script>
  import { browser } from "$app/environment"

  function resetStorage() {
    if (browser) {
      window.localStorage.removeItem("data");
      window.localStorage.removeItem("facilities");
      window.localStorage.removeItem("upgrades");
      window.location.href = "/";
    }
  }
</script>

<div class="debug-menu">
  <button on:click={resetStorage}>Reset</button>
</div>

<style>
  .debug-menu {
    display: flex;
    gap: .5rem;
  }
  button {
    padding: .25rem .5rem;
    border-radius: 2rem;
    background-color: rgba(0,0,0,.2);
    color: inherit;
    text-transform: uppercase;
    border: 1px solid rgba(255,255,255,.1);
  }
</style>