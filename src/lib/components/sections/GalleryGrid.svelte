<script lang="ts">
  export let images: string[] = [];
  let active: string | null = null;
</script>

<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
  {#each images as image, i}
    <button class="overflow-hidden rounded-2xl" on:click={() => (active = image)}>
      <img src={image} alt={`Portfolio sample ${i + 1}`} class="h-64 w-full object-cover transition duration-300 hover:scale-105" loading="lazy" />
    </button>
  {/each}
</div>

{#if active}
  <button class="fixed inset-0 z-50 bg-black/85 p-4" on:click={() => (active = null)} aria-label="Close gallery preview">
    <img src={active} alt="Selected gallery" class="mx-auto mt-16 max-h-[80vh] rounded-2xl object-contain" />
  </button>
{/if}
