import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const initPredators = [
  {
    name: "Saltling",
    description: "Rawr.",
    currentHealth: 10,
    maxHealth: 10,
  },
  {
    name: "Crystal Crawler",
    description: "Rawr.",
    currentHealth: 30,
    maxHealth: 30,
  },
  {
    name: "Brine Beast",
    description: "Rawr.",
    currentHealth: 60,
    maxHealth: 60,
  },
  {
    name: "Salt Siphon",
    description: "Rawr.",
    currentHealth: 100,
    maxHealth: 100,
  }
];

let store = browser ? localStorage.getItem('predators') : null;
let parse = store ? JSON.parse(store) : initPredators;

export let predators = writable(parse);

predators.subscribe((value) => {
  if (browser) {
    localStorage.setItem('predators', JSON.stringify(value));
  }
});