<script>
  import '../app.css'
  import TopSection from '$lib/TopSection.svelte';
  import Announcements from "$lib/Announcements.svelte";
  import Deco from '$lib/Deco.svelte';
</script>

<svelte:head>
  <title>Beyond Salty</title>
</svelte:head>

<TopSection />
<Announcements />
<slot></slot>
<Deco />