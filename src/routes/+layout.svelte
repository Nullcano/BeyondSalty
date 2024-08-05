<script>
  import '../app.css'
  import TopSection from '$lib/TopSection.svelte';
  import Announcements from "$lib/Announcements.svelte";

  function handleRightClick(e) {
    e.preventDefault();
    return;
  }
</script>

<svelte:window on:contextmenu={handleRightClick} />
<svelte:head>
  <title>Beyond Salty</title>
</svelte:head>

<TopSection />
<Announcements />
<slot></slot>