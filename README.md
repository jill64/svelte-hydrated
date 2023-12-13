<!----- BEGIN GHOST DOCS HEADER ----->

# svelte-hydrated

<!----- BEGIN GHOST DOCS BADGES -----><a href="https://npmjs.com/package/svelte-hydrated"><img src="https://img.shields.io/npm/v/svelte-hydrated" alt="npm-version" /></a> <a href="https://npmjs.com/package/svelte-hydrated"><img src="https://img.shields.io/npm/l/svelte-hydrated" alt="npm-license" /></a> <a href="https://npmjs.com/package/svelte-hydrated"><img src="https://img.shields.io/npm/dm/svelte-hydrated" alt="npm-download-month" /></a> <a href="https://npmjs.com/package/svelte-hydrated"><img src="https://img.shields.io/bundlephobia/min/svelte-hydrated" alt="npm-min-size" /></a> <a href="https://github.com/jill64/svelte-hydrated/actions/workflows/ci.yml"><img src="https://github.com/jill64/svelte-hydrated/actions/workflows/ci.yml/badge.svg" alt="ci.yml" /></a><!----- END GHOST DOCS BADGES ----->

💧 Indicating hydration status by svelte-store

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
