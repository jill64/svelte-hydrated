<!----- BEGIN GHOST DOCS HEADER ----->
<!----- END GHOST DOCS HEADER ----->

## Installation

```bash
npm i svelte-hydrated
```

## Example

The `$hydrated` store is updated to `true` at the next tick when the `browser` is `true`

```svelte
<script>
  import { hydrated } from 'svelte-hydrated'
  import { slide } from 'svelte/transition'
</script>

{#if $hydrated}
  <h2 transition:slide>Hydrated</h2>
{:else}
  <h2 transition:slide>Not Hydrated</h2>
{/if}
```

## Why not use `browser` ?

The `browser` (`$app/environment`) is useful for identifying the execution environment of the code, but its value is determined before the first rendering is started.  
This means that `transition` etc. will not be triggered when hydration completes.  
The `$hydrated` store is updated to `true` at the next `tick` when the browser is `true`, making it simpler to set `transition`.
