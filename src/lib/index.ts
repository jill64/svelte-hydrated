import { browser } from '$app/environment'
import { tick } from 'svelte'
import { writable } from 'svelte/store'

export const hydrated = writable(false, (set) => {
  if (browser) {
    tick().then(() => set(true))
  }
})
