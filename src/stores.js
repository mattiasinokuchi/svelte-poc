// This file contains the profile and token shared across the components

import {writable, derived} from 'svelte/store'
export const profile = writable(null)
export const token = writable(null)
export const isAuthenticated = derived([token, profile], (a) =>   a && a[0] && a[1]) // read-only derived from other stores
export const view = writable(null)
