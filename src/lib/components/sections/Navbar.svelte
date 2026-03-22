<script lang="ts">
  import { page } from '$app/stores';
  import Button from '$lib/components/ui/Button.svelte';
  import { siteData } from '$lib/data/site';

  let open = false;
</script>

<header class="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
  <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
    <a href="/" class="text-xl font-bold tracking-tight text-slate-900">{siteData.businessName}</a>
    <nav class="hidden items-center gap-8 md:flex">
      {#each siteData.navLinks as link}
        <a href={link.href} class="text-sm font-medium transition hover:text-slate-900 {$page.url.pathname === link.href ? 'text-brand-700' : 'text-slate-600'}">{link.label}</a>
      {/each}
    </nav>
    <Button href="/contact#booking" className="hidden md:inline-flex">Book Now</Button>
    <button class="rounded p-2 md:hidden" aria-expanded={open} on:click={() => (open = !open)}>☰</button>
  </div>
  {#if open}
    <nav class="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
      <div class="flex flex-col gap-4">
        {#each siteData.navLinks as link}
          <a href={link.href} class="text-sm text-slate-700">{link.label}</a>
        {/each}
        <Button href="/contact#booking">Book Now</Button>
      </div>
    </nav>
  {/if}
</header>
