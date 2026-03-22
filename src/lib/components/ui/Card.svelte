<script lang="ts">
  import { cn } from '$lib/utils/cn';
  export let className = '';
</script>

<article class={cn('rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200', className)}>
  <slot />
</article>
