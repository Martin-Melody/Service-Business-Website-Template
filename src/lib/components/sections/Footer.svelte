<script lang="ts">
  import { siteData } from '$lib/data/site';
</script>

<footer class="mt-20 border-t border-slate-200 bg-slate-50">
  <div class="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4 md:px-6">
    <div>
      <h3 class="text-lg font-semibold">{siteData.businessName}</h3>
      <p class="mt-3 text-sm text-slate-500">Reusable website template for appointment-based service businesses.</p>
    </div>
    <div>
      <h4 class="font-semibold">Navigation</h4>
      <div class="mt-3 flex flex-col gap-2">
        {#each siteData.navLinks as link}
          <a class="text-sm text-slate-500 hover:text-slate-900" href={link.href}>{link.label}</a>
        {/each}
      </div>
    </div>
    <div>
      <h4 class="font-semibold">Contact</h4>
      <p class="mt-3 text-sm text-slate-500">{siteData.phoneLabel}<br />{siteData.email}<br />{siteData.address}</p>
    </div>
    <div>
      <h4 class="font-semibold">Hours</h4>
      <div class="mt-3 space-y-1">
        {#each siteData.hours.slice(0, 4) as [day, value]}
          <p class="text-sm text-slate-500">{day}: {value}</p>
        {/each}
      </div>
    </div>
  </div>
</footer>
