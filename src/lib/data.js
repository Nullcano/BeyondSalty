import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const initData = {
  salt: {
    current: 0,
    total: 0,
    second: 1,
    click: 1,
  }
};

let store = browser ? localStorage.getItem('data') : null;
let parse = store ? JSON.parse(store) : initData;

export let data = writable(parse);

data.subscribe((value) => {
  if (browser) {
    localStorage.setItem('data', JSON.stringify(value));
  }
});