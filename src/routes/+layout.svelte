<script lang="ts">
  import '../app.css';
  import Navbar from '$lib/components/sections/Navbar.svelte';
  import Footer from '$lib/components/sections/Footer.svelte';
</script>

<Navbar />
<slot />
<Footer />
