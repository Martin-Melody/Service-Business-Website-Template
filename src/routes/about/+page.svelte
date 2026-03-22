<script lang="ts">
  import TeamCard from '$lib/components/sections/TeamCard.svelte';
  import { teamMembers } from '$lib/data/site';
</script>

<svelte:head><title>About | LuxeService</title></svelte:head>

<main>
  <section class="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6">
    <div>
      <h1 class="text-4xl font-bold">A people-first approach to premium service.</h1>
      <p class="mt-6 text-slate-600">Use this section to describe your business journey, your local reputation, and why clients across Ireland trust your team.</p>
    </div>
    <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1000&q=80" alt="Business owner welcoming clients" class="rounded-3xl object-cover shadow-md" />
  </section>
  <section class="mx-auto max-w-6xl px-4 pb-20 md:px-6">
    <h2 class="text-3xl font-bold">Meet the Team</h2>
    <div class="mt-8 grid gap-6 md:grid-cols-3">
      {#each teamMembers as member}
        <TeamCard {member} />
      {/each}
    </div>
  </section>
</main>
