<script lang="ts">
  import { cn } from '$lib/utils/cn';
  export let rows = 4;
  export let className = '';
</script>

<textarea {rows} class={cn('mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-brand-600 focus:outline-none', className)}><slot /></textarea>
