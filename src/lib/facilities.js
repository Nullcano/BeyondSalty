import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const initFacilities = [
  {
      name: "Hydration Station",
      plural: "hydration stations",
      description: "Because licking the salt walls isn't a sustainable hydration strategy.",
      icon: "bottle",
      effect: 1,
      cost: 10,
      efficiency: 0
  }, {
      name: "Enhanced Lighting",
      plural: "enhanced lightings",
      description: "Light up your life, or at least your salt cave, and stop stumbling in the dark.",
      icon: "light",
      effect: 2,
      cost: 100,
      efficiency: 0
  }, {
      name: "Ventilation System",
      plural: "ventilation systems",
      description: "Keeping the air fresh so you don't feel like a salted sardine.",
      icon: "vent",
      effect: 4,
      cost: 1000,
      efficiency: 0
  }, {
      name: "Storage Vault",
      plural: "storage vaults",
      description: "For when your pockets are as full as your dreams of striking it rich.",
      icon: "vault",
      effect: 6,
      cost: 10000,
      efficiency: 0
  }, {
      name: "Workshop",
      plural: "workshops",
      description: "Where broken tools come to get hammered back into shape.",
      icon: "workshop",
      effect: 8,
      cost: 100000,
      efficiency: 0
  }, {
      name: "Salvage Yard",
      plural: "salvage yards",
      description: "One miner's trash is another miner's treasure chest of spare parts.",
      icon: "salvage",
      effect: 12,
      cost: 1000000,
      efficiency: 0
  }, {
      name: "Trade Hub",
      plural: "trade hubs",
      description: "Turning your hard-earned salt into hard-to-find goodies.",
      icon: "trade",
      effect: 20,
      cost: 10000000,
      efficiency: 0
  }, {
      name: "Ore Analyzer",
      plural: "ore analyzers",
      description: "Because not all that glitters is salt... or is it?",
      icon: "analyze",
      effect: 30,
      cost: 100000000,
      efficiency: 0
  }, {
      name: "Geological Scanner",
      plural: "scan",
      description: "Finding the best spots to dig, so you don't end up with just a salty disposition.",
      icon: "scan",
      effect: 40,
      cost: 1000000000,
      efficiency: 0
  }, {
      name: "Mining Bot",
      plural: "mining bots",
      description: "Let the robots do the heavy lifting while you take the credit.",
      icon: "bot",
      effect: 60,
      cost: 10000000000,
      efficiency: 0
  }, {
      name: "Energy Generator",
      plural: "energy generators",
      description: "Powering your mining dreams, one spark at a time.",
      icon: "energy",
      effect: 90,
      cost: 100000000000,
      efficiency: 0
  },
  {
      name: "Salt Shaper",
      plural: "salt shapers",
      description: "Turning chunks of salt into artisanal masterpieces.",
      icon: "shapes",
      effect: 130,
      cost: 1000000000000,
      efficiency: 0
  }, {
      name: "Mining Amplifier",
      plural: "mining amplifier",
      description: "Because sometimes you need to turn it up to eleven.",
      icon: "amplify",
      effect: 200,
      cost: 10000000000000,
      efficiency: 0
  }, {
      name: "Exploration Drone",
      plural: "exploration drone",
      description: "Sending in the drones so you don't have to get lost.",
      icon: "drone",
      effect: 300,
      cost: 100000000000000,
      efficiency: 0
  }, {
      name: "Drill Station",
      plural: "drill station",
      description: "Upgrade your pickaxe to a drill and watch those salt walls crumble.",
      icon: "drill",
      effect: 460,
      cost: 1000000000000000,
      efficiency: 0
  }, {
      name: "Salt Refinery",
      plural: "salt refineries",
      description: "Polishing your salt until it's good enough to make even the sea jealous.",
      icon: "filter",
      effect: 690,
      cost: 10000000000000000,
      efficiency: 0
  }
];

let store = browser ? localStorage.getItem('facilities') : null;
let parse = store ? JSON.parse(store) : initFacilities;

export let facilities = writable(parse);

facilities.subscribe((value) => {
  if (browser) {
    localStorage.setItem('facilities', JSON.stringify(value));
  }
});