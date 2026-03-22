<script lang="ts">
  import GalleryGrid from '$lib/components/sections/GalleryGrid.svelte';
  import { galleryImages } from '$lib/data/site';
</script>

<svelte:head><title>Gallery | LuxeService</title></svelte:head>

<main class="mx-auto max-w-6xl px-4 py-16 md:px-6">
  <h1 class="text-4xl font-bold">Portfolio highlights and recent results.</h1>
  <p class="mt-4 max-w-3xl text-slate-600">Use this grid to showcase transformations, studio atmosphere, and signature outcomes.</p>
  <div class="mt-10">
    <GalleryGrid images={galleryImages} />
  </div>
</main>
