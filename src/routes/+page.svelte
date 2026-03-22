<script lang="ts">
  import Button from '$lib/components/ui/Button.svelte';
  import ServiceCard from '$lib/components/sections/ServiceCard.svelte';
  import TeamCard from '$lib/components/sections/TeamCard.svelte';
  import TestimonialCard from '$lib/components/sections/TestimonialCard.svelte';
  import GalleryGrid from '$lib/components/sections/GalleryGrid.svelte';
  import OpeningHours from '$lib/components/sections/OpeningHours.svelte';
  import Input from '$lib/components/ui/Input.svelte';
  import Textarea from '$lib/components/ui/Textarea.svelte';
  import { galleryImages, services, siteData, teamMembers, testimonials } from '$lib/data/site';
</script>

<svelte:head>
  <title>LuxeService | SvelteKit Template</title>
  <meta name="description" content="SvelteKit + shadcn-style reusable template for Irish service businesses." />
</svelte:head>

<main>
  <section class="relative isolate overflow-hidden">
    <img src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1800&q=80" alt="Modern service business interior" class="absolute inset-0 -z-10 h-full w-full object-cover" />
    <div class="hero-overlay absolute inset-0 -z-10"></div>
    <div class="mx-auto flex min-h-[78vh] max-w-6xl items-center px-4 py-24 md:px-6">
      <div class="max-w-2xl text-white">
        <p class="inline-block rounded-full bg-white/10 px-4 py-1 text-sm ring-1 ring-white/30">SvelteKit + shadcn-style UI</p>
        <h1 class="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">Elevate your service business with a site built to convert bookings.</h1>
        <p class="mt-6 text-lg text-slate-200">Customisable for salons, spas, clinics, tattoo studios, therapists, and more across Ireland.</p>
        <div class="mt-10 flex flex-wrap gap-4">
          <Button href="/contact#booking" size="lg">Book Appointment</Button>
          <Button href="/services" size="lg" variant="outline">View Services</Button>
        </div>
      </div>
    </div>
  </section>

  <section class="mx-auto max-w-6xl px-4 py-20 md:px-6">
    <h2 class="text-3xl font-bold md:text-4xl">Popular services designed for every client.</h2>
    <div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {#each services.slice(0, 3) as service}
        <ServiceCard {service} />
      {/each}
    </div>
  </section>

  <section class="mx-auto max-w-6xl px-4 py-20 md:px-6">
    <h2 class="text-3xl font-bold md:text-4xl">Meet the professionals behind the experience.</h2>
    <div class="mt-10 grid gap-6 md:grid-cols-3">
      {#each teamMembers as member}
        <TeamCard {member} />
      {/each}
    </div>
  </section>

  <section class="mx-auto max-w-6xl px-4 py-20 md:px-6">
    <h2 class="text-3xl font-bold md:text-4xl">Showcase your best work.</h2>
    <div class="mt-10">
      <GalleryGrid images={galleryImages.slice(0, 4)} />
    </div>
  </section>

  <section class="mx-auto max-w-6xl px-4 py-20 md:px-6">
    <h2 class="text-3xl font-bold md:text-4xl">Clients love the experience.</h2>
    <div class="mt-10 grid gap-6 md:grid-cols-3">
      {#each testimonials as item}
        <TestimonialCard {item} />
      {/each}
    </div>
  </section>

  <section class="mx-auto max-w-6xl px-4 pb-20 md:px-6">
    <div class="rounded-3xl bg-slate-900 px-8 py-14 text-center text-white shadow-lg">
      <h2 class="text-3xl font-bold md:text-4xl">Ready to grow your appointment bookings?</h2>
      <div class="mt-8 flex flex-wrap justify-center gap-4">
        <Button href="/contact#booking" size="lg">Book Appointment</Button>
        <Button href={siteData.phoneHref} size="lg" variant="outline" className="border-slate-600 bg-transparent text-white hover:bg-slate-800">Call {siteData.phoneLabel}</Button>
      </div>
    </div>
  </section>

  <section class="mx-auto max-w-6xl px-4 pb-20 md:px-6">
    <h2 class="text-3xl font-bold md:text-4xl">Questions? Let’s connect.</h2>
    <div class="mt-10 grid gap-8 md:grid-cols-2">
      <form class="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <div class="grid gap-4 sm:grid-cols-2">
          <label class="text-sm font-medium">Name<Input /></label>
          <label class="text-sm font-medium">Phone<Input type="tel" /></label>
        </div>
        <label class="mt-4 block text-sm font-medium">Email<Input type="email" /></label>
        <label class="mt-4 block text-sm font-medium">Message<Textarea /></label>
        <Button type="submit" className="mt-5">Send Message</Button>
      </form>
      <OpeningHours />
    </div>
  </section>
</main>
