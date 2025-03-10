<script lang="ts">
  import { browser } from '$app/environment'
  import { is } from '$lib/index.svelte'
  import { HighlightSvelte } from '@jill64/npm-demo-layout/highlight'
  import { RotateCwIcon } from 'svelte-feather-icons'
  import { fade, slide } from 'svelte/transition'
  import { code } from './code'
</script>

<aside>
  <!-- eslint-disable-next-line -->
  <button transition:fade on:click={() => location.reload()}>
    <RotateCwIcon />
    <span style:font-size="large">Reload</span>
  </button>
  <p>
    The <code>$hydrated</code> store is updated to <code data-bool>true</code>
    at the next tick when the <code>browser</code> is
    <code data-bool>true</code>
  </p>
</aside>

<main>
  <div>
    {#if is.hydrated}
      <h2 transition:slide>Hydrated</h2>
    {:else}
      <h2 transition:slide>Not Hydrated</h2>
    {/if}
    <HighlightSvelte code={code.hydrated} />
  </div>
  <div>
    {#if browser}
      <h2 transition:slide>Hydrated</h2>
    {:else}
      <h2 transition:slide>Not Hydrated</h2>
    {/if}
    <HighlightSvelte code={code.browser} />
  </div>
</main>

<style>
  aside {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 2rem;
  }
  main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  @media (max-width: 800px) {
    main {
      grid-template-columns: 1fr;
    }
  }
  aside code {
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    background: rgba(0, 0, 0, 0.1);
    color: chocolate;
  }
  aside code[data-bool] {
    color: teal;
  }
  :global(.dark) aside code {
    background: rgba(255, 255, 255, 0.1);
    color: orange;
  }
  :global(.dark) aside code[data-bool] {
    color: darkcyan;
  }
  button {
    display: inline-flex;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: 1px solid #888;
    background: transparent;
    cursor: pointer;
    color: inherit;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
  }
  button:hover {
    background: rgba(0, 0, 0, 0.1);
  }
  button:active {
    background: rgba(0, 0, 0, 0.2);
  }
  :global(.dark) button:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  :global(.dark) button:active {
    background: rgba(255, 255, 255, 0.2);
  }
  div {
    overflow-x: auto;
  }
</style>
