<script lang="ts">
  import { cn } from '$lib/utils/cn';
  export let type = 'text';
  export let placeholder = '';
  export let required = false;
  export let className = '';
  export let value = '';
</script>

<input bind:value {type} {placeholder} {required} class={cn('mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-brand-600 focus:outline-none', className)} />
