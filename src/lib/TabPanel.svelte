<script>
	import { getContext } from 'svelte';
	import { tabContextId } from '$lib/Tabs.svelte';

	export let id;
	
	const { selectedTab } = getContext(tabContextId);
</script>

<div class="tab-panel">
  {#if $selectedTab === id}
    <slot></slot>
  {/if}
</div>

<style>
  .tab-panel {
    margin-bottom: 1rem;
    padding: .5rem;
    height: calc(100vh - 4.5rem);
    background: rgba(0,0,0,.5);
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 1rem), calc(100% - 1rem) 100%, 1rem 100%, 0% calc(100% - 1rem));
    overflow-y: auto;
  }
</style>