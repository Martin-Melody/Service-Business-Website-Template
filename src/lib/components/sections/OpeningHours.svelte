<script lang="ts">
  import Card from '$lib/components/ui/Card.svelte';
  import { siteData } from '$lib/data/site';
</script>

<Card>
  <h3 class="text-lg font-semibold">Opening Hours</h3>
  <ul class="mt-4 space-y-2">
    {#each siteData.hours as [day, value]}
      <li class="flex justify-between text-sm text-slate-600"><span>{day}</span><span>{value}</span></li>
    {/each}
  </ul>
</Card>
