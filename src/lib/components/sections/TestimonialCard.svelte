<script lang="ts">
  import Card from '$lib/components/ui/Card.svelte';
  export let item: { quote: string; name: string };
</script>

<Card>
  <p class="text-amber-500">★★★★★</p>
  <blockquote class="mt-3 text-slate-700">“{item.quote}”</blockquote>
  <p class="mt-4 text-sm font-semibold">— {item.name}</p>
</Card>
