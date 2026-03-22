<script lang="ts">
  import Button from '$lib/components/ui/Button.svelte';
  import Input from '$lib/components/ui/Input.svelte';
  import OpeningHours from '$lib/components/sections/OpeningHours.svelte';
  import Textarea from '$lib/components/ui/Textarea.svelte';
  import { siteData } from '$lib/data/site';
</script>

<svelte:head><title>Contact | LuxeService</title></svelte:head>

<main class="mx-auto max-w-6xl px-4 py-16 md:px-6">
  <h1 class="text-4xl font-bold">Book your appointment or ask a question.</h1>
  <div class="mt-10 grid gap-8 md:grid-cols-2">
    <form id="booking" class="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
      <h2 class="text-xl font-semibold">Appointment Request</h2>
      <div class="mt-5 grid gap-4 sm:grid-cols-2">
        <label class="text-sm font-medium">Name<Input required /></label>
        <label class="text-sm font-medium">Phone<Input type="tel" required /></label>
      </div>
      <label class="mt-4 block text-sm font-medium">Email<Input type="email" required /></label>
      <label class="mt-4 block text-sm font-medium">Message<Textarea /></label>
      <Button type="submit" className="mt-5">Submit Request</Button>
    </form>

    <div class="space-y-6">
      <article class="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <h2 class="text-xl font-semibold">Business Details</h2>
        <p class="mt-4 text-slate-600">Phone: {siteData.phoneLabel}</p>
        <p class="text-slate-600">Email: {siteData.email}</p>
        <p class="text-slate-600">Address: {siteData.address}</p>
        <a href={siteData.phoneHref} class="mt-4 inline-block font-semibold text-brand-700">Call Now →</a>
      </article>
      <article class="rounded-2xl bg-slate-200 p-6 text-slate-700">
        <h2 class="text-lg font-semibold">Map Placeholder (Ireland)</h2>
        <div class="mt-4 flex h-40 items-center justify-center rounded-xl bg-slate-300 text-sm">Map Embed Area (Dublin)</div>
      </article>
      <OpeningHours />
    </div>
  </div>
</main>
