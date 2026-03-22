<script lang="ts">
  import Card from '$lib/components/ui/Card.svelte';
  export let member: { name: string; role: string; bio: string; image: string };
</script>

<Card className="p-5">
  <img src={member.image} alt={member.name} class="h-60 w-full rounded-xl object-cover" loading="lazy" />
  <h3 class="mt-4 text-xl font-semibold">{member.name}</h3>
  <p class="text-brand-700">{member.role}</p>
  <p class="mt-2 text-slate-600">{member.bio}</p>
</Card>
