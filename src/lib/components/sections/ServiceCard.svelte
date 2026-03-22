<script lang="ts">
  import Card from '$lib/components/ui/Card.svelte';
  import Button from '$lib/components/ui/Button.svelte';
  export let service: { name: string; description: string; price: string; duration: string; category: string };
</script>

<Card className="transition hover:-translate-y-1 hover:shadow-lg">
  <p class="text-sm font-medium text-brand-700">{service.category}</p>
  <h3 class="mt-3 text-xl font-semibold">{service.name}</h3>
  <p class="mt-3 text-slate-600">{service.description}</p>
  <div class="mt-6 flex items-center justify-between">
    <div>
      <p class="text-lg font-semibold">{service.price}</p>
      <p class="text-sm text-slate-500">{service.duration}</p>
    </div>
    <Button href="/contact#booking" size="sm">Book</Button>
  </div>
</Card>
