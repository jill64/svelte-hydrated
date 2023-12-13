export const code = {
  hydrated: /* html */ `
<script>
  import { hydrated } from 'svelte-hydrated'
  import { fade, slide } from 'svelte/transition'
</script>

{#if $hydrated}
  <h2 transition:slide>Hydrated</h2>
{:else}
  <h2 transition:slide>Not Hydrated</h2>
{/if}
`,
  browser: /* html */ `
<script>
  import { browser } from '$app/environment'
  import { fade, slide } from 'svelte/transition'
</script>

{#if browser}
  <h2 transition:slide>Hydrated</h2>
{:else}
  <h2 transition:slide>Not Hydrated</h2>
{/if}
`
}
