<script>
	import { getContext } from 'svelte';
	import { tabContextId } from './Tabs.svelte';
	
	export let id;
	
	const { selectedTab, selectTab } = getContext(tabContextId);
</script>

<button 
	class:selected="{$selectedTab === id}" 
	on:click="{() => selectTab(id)}"
>
	<slot></slot>
</button>

<style>
  button {
    height: 3rem;
    padding: .5rem;
    font-size: 1.25rem;
		color: white;
    text-shadow: 0 0 .25rem #000;
    text-transform: uppercase;
		background: rgba(255,255,255,.1);
		clip-path: polygon(1rem 0%, calc(100% - 1rem) 0%, 100% 1rem, 100% 100%, 0 100%, 0% 1rem);
    cursor: pointer;
  }
	.selected {
		background: rgba(0,0,0,.5);
	}
</style>