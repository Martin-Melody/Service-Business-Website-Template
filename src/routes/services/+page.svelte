<script lang="ts">
  import ServiceCard from '$lib/components/sections/ServiceCard.svelte';
  import Button from '$lib/components/ui/Button.svelte';
  import { services } from '$lib/data/site';
</script>

<svelte:head><title>Services | LuxeService</title></svelte:head>

<main class="mx-auto max-w-6xl px-4 py-16 md:px-6">
  <h1 class="text-4xl font-bold">Complete service menu and pricing.</h1>
  <p class="mt-4 max-w-3xl text-slate-600">All cards are reusable and suited to appointment-based businesses across Ireland.</p>
  <div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {#each services as service}
      <ServiceCard {service} />
    {/each}
  </div>
  <section class="mt-16 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
    <h2 class="text-2xl font-bold">Need a custom package?</h2>
    <p class="mt-3 text-slate-600">Offer bundled appointments for recurring clients, wedding weekends, and special events.</p>
    <Button href="/contact#booking" className="mt-6">Request Package</Button>
  </section>
</main>
