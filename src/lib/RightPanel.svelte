<script>
	import Tabs from '$lib/Tabs.svelte';
	import TabPanel from '$lib/TabPanel.svelte';
	import TabList from '$lib/TabList.svelte';
	import Tab from '$lib/Tab.svelte';
	
	import Units from '$lib/Units.svelte';

	let selectedId = "first";
</script>

<aside>
  <Tabs {selectedId}>
    <TabList>
      <Tab id="first">Units</Tab>
      <Tab id="second">Training</Tab>
    </TabList>
  
    <TabPanel id="first">
      <Units />
    </TabPanel>
  
    <TabPanel id="second">
      <h2>Training</h2>
    </TabPanel>
  </Tabs>
</aside>

<style>
  aside {
    position: relative;
    padding: .5rem;
    width: 20em;
    height: 100vh;
  }
</style>