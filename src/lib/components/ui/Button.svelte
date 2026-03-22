<script lang="ts">
  import { cva, type VariantProps } from 'class-variance-authority';
  import { cn } from '$lib/utils/cn';

  const buttonVariants = cva(
    'inline-flex items-center justify-center rounded-full text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    {
      variants: {
        variant: {
          default: 'bg-brand-600 text-white hover:bg-brand-700 focus-visible:ring-brand-600',
          outline: 'border border-slate-300 bg-white text-slate-900 hover:bg-slate-100 focus-visible:ring-slate-400',
          ghost: 'text-slate-700 hover:bg-slate-100'
        },
        size: {
          default: 'h-10 px-5 py-2',
          lg: 'h-12 px-7 py-3',
          sm: 'h-9 px-4'
        }
      },
      defaultVariants: {
        variant: 'default',
        size: 'default'
      }
    }
  );

  type Variant = VariantProps<typeof buttonVariants>['variant'];
  type Size = VariantProps<typeof buttonVariants>['size'];

  export let href: string | undefined = undefined;
  export let type: 'button' | 'submit' = 'button';
  export let variant: Variant = 'default';
  export let size: Size = 'default';
  export let className = '';
</script>

{#if href}
  <a href={href} class={cn(buttonVariants({ variant, size }), className)}>
    <slot />
  </a>
{:else}
  <button {type} class={cn(buttonVariants({ variant, size }), className)}>
    <slot />
  </button>
{/if}
