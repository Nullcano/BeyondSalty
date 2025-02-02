import { writable } from "svelte/store";
import { browser } from "$app/environment";

const initUpgrades = [
  {
    name: "Basic Hydration Pack",
    description: "No more licking walls. Now you get real water!",
    facility: "Hydration Station",
    icon: "bottle",
    effect: 2,
    cost: 100,
    requirement: 10,
    unlocked: true,
    active: false,
  }, {
    name: "Mineral Mixer",
    description: "Hydrate and get your daily dose of essential minerals.",
    facility: "Hydration Station",
    icon: "bottle",
    effect: 2,
    cost: 1000,
    requirement: 20,
    unlocked: true,
    active: false,
  }, {
    name: "Cooler Upgrade",
    description: "Ice-cold water, because nobody likes warm hydration.",
    facility: "Hydration Station",
    icon: "bottle",
    effect: 2,
    cost: 10000,
    requirement: 30,
    unlocked: false,
    active: false,
  }, {
    name: "Electrolyte Enhancer",
    description: "Stay salty and hydrated. The best of both worlds.",
    facility: "Hydration Station",
    icon: "bottle",
    effect: 2,
    cost: 100000,
    requirement: 40,
    unlocked: false,
    active: false,
  }, {
    name: "Automated Dispenser",
    description: "Push a button, get hydrated. It's that simple.",
    facility: "Hydration Station",
    icon: "bottle",
    effect: 2,
    cost: 1000000,
    requirement: 50,
    unlocked: false,
    active: false,
  }, {
    name: "Infusion Station",
    description: "Water with a hint of lemon or mint. Fancy, right?",
    facility: "Hydration Station",
    icon: "bottle",
    effect: 2,
    cost: 10000000,
    requirement: 60,
    unlocked: false,
    active: false,
  }, {
    name: "Portable Hydrator",
    description: "Carry hydration with you wherever you go.",
    facility: "Hydration Station",
    icon: "bottle",
    effect: 2,
    cost: 100000000,
    requirement: 70,
    unlocked: false,
    active: false,
  }, {
    name: "Smart Hydration",
    description: "Tracks your intake and reminds you to drink up.",
    facility: "Hydration Station",
    icon: "bottle",
    effect: 2,
    cost: 1000000000,
    requirement: 80,
    unlocked: false,
    active: false,
  }, {
    name: "Hydration Network",
    description: "Connect multiple stations for all-around access.",
    facility: "Hydration Station",
    icon: "bottle",
    effect: 2,
    cost: 10000000000,
    requirement: 90,
    unlocked: false,
    active: false,
  }, {
    name: "Luxury Hydration Suite",
    description: "Spa-like hydration experience. You deserve it.",
    facility: "Hydration Station",
    icon: "bottle",
    effect: 2,
    cost: 100000000000,
    requirement: 100,
    unlocked: false,
    active: false,
  },{
    name: "Basic Lamp Kit",
    description: "Light up your life, one bulb at a time.",
    facility: "Enhanced Lighting",
    icon: "light",
    effect: 2,
    cost: 1000,
    requirement: 10,
    unlocked: true,
    active: false,
  }, {
    name: "Halogen Upgrade",
    description: "Brighter lights for brighter days (and nights).",
    facility: "Enhanced Lighting",
    icon: "light",
    effect: 2,
    cost: 10000,
    requirement: 20,
    unlocked: true,
    active: false,
  }, {
    name: "LED Overhaul",
    description: "Energy-efficient and blindingly bright.",
    facility: "Enhanced Lighting",
    icon: "light",
    effect: 2,
    cost: 100000,
    requirement: 30,
    unlocked: false,
    active: false,
  }, {
    name: "Motion Sensors",
    description: "Lights that know when you're there. Spooky, but useful.",
    facility: "Enhanced Lighting",
    icon: "light",
    effect: 2,
    cost: 1000000,
    requirement: 40,
    unlocked: false,
    active: false,
  }, {
    name: "Color Spectrum",
    description: "Why settle for white light when you can have a rainbow?",
    facility: "Enhanced Lighting",
    icon: "light",
    effect: 2,
    cost: 10000000,
    requirement: 50,
    unlocked: false,
    active: false,
  }, {
    name: "Solar Powered",
    description: "Let the sun do the work, even underground.",
    facility: "Enhanced Lighting",
    icon: "light",
    effect: 2,
    cost: 100000000,
    requirement: 60,
    unlocked: false,
    active: false,
  }, {
    name: "Smart Lighting",
    description: "Control the lights with your voice. Or thoughts, maybe.",
    facility: "Enhanced Lighting",
    icon: "light",
    effect: 2,
    cost: 1000000000,
    requirement: 70,
    unlocked: false,
    active: false,
  }, {
    name: "Emergency Lighting",
    description: "Because unexpected darkness is not fun.",
    facility: "Enhanced Lighting",
    icon: "light",
    effect: 2,
    cost: 10000000000,
    requirement: 80,
    unlocked: false,
    active: false,
  }, {
    name: "Decorative Fixtures",
    description: "Function meets style. Your cave, your aesthetic.",
    facility: "Enhanced Lighting",
    icon: "light",
    effect: 2,
    cost: 100000000000,
    requirement: 90,
    unlocked: false,
    active: false,
  }, {
    name: "Lighting Network",
    description: "All lights, all the time, everywhere.",
    facility: "Enhanced Lighting",
    icon: "light",
    effect: 2,
    cost: 1000000000000,
    requirement: 100,
    unlocked: false,
    active: false,
  }, {
    name: "Basic Vent Upgrade",
    description: "Fresh air, because breathing is important.",
    facility: "Ventilation System",
    icon: "vent",
    effect: 2,
    cost: 10000,
    requirement: 10,
    unlocked: true,
    active: false,
  }, {
    name: "Fan Power Boost",
    description: "Turn up the wind. Feel the breeze.",
    facility: "Ventilation System",
    icon: "vent-speed",
    effect: 2,
    cost: 100000,
    requirement: 20,
    unlocked: true,
    active: false,
  }, {
    name: "Air Filtration",
    description: "No more dust. Breathe easy, breathe clean.",
    facility: "Ventilation System",
    icon: "vent",
    effect: 2,
    cost: 1000000,
    requirement: 30,
    unlocked: false,
    active: false,
  }, {
    name: "Climate Control",
    description: "Temperature regulation for the perfect mining environment.",
    facility: "Ventilation System",
    icon: "vent",
    effect: 2,
    cost: 10000000,
    requirement: 40,
    unlocked: false,
    active: false,
  }, {
    name: "Humidity Control",
    description: "Not too dry, not too humid. Just right.",
    facility: "Ventilation System",
    icon: "vent",
    effect: 2,
    cost: 100000000,
    requirement: 50,
    unlocked: true,
    active: false,
  }, {
    name: "Silent Mode",
    description: "Ventilation without the noise. It's almost eerie.",
    facility: "Ventilation System",
    icon: "vent",
    effect: 2,
    cost: 1000000000,
    requirement: 60,
    unlocked: true,
    active: false,
  }, {
    name: "Smart Vents",
    description: "Adjusts airflow based on your needs. Fancy tech, huh?",
    facility: "Ventilation System",
    effect: 2,
    cost: 10000000000,
    requirement: 70,
    unlocked: false,
    active: false,
  }, {
    name: "Backup Generators",
    description: "No power? No problem. Vents keep going.",
    facility: "Ventilation System",
    effect: 2,
    cost: 100000000000,
    requirement: 80,
    unlocked: false,
    active: false,
  }, {
    name: "Air Fresheners",
    description: "A touch of lavender to your salty air.",
    facility: "Ventilation System",
    effect: 2,
    cost: 1000000000000,
    requirement: 90,
    unlocked: false,
    active: false,
  }, {
    name: "Ventilation Network",
    description: "All vents, all connected, all fresh.",
    facility: "Ventilation System",
    effect: 2,
    cost: 10000000000000,
    requirement: 100,
    unlocked: false,
    active: false,
  }, {
    name: "Basic Expansion",
    description: "A little more space for all your salty needs.",
    facility: "Storage Vault",
    effect: 2,
    cost: 20,
    requirement: 10,
    unlocked: true,
    active: false,
  }, {
    name: "Security Upgrade",
    description: "Locks that actually work. Keep your salt safe.",
    facility: "Storage Vault",
    effect: 2,
    cost: 50,
    requirement: 20,
    unlocked: true,
    active: false,
  }, {
    name: "Climate Control",
    description: "Your salt, kept at the perfect temperature.",
    facility: "Storage Vault",
    effect: 2,
    cost: 150,
    requirement: 30,
    unlocked: false,
    active: false,
  }, {
    name: "Automated Sorting",
    description: "No more messy piles. Organized salt, organized life.",
    facility: "Storage Vault",
    effect: 2,
    cost: 300,
    requirement: 40,
    unlocked: false,
    active: false,
  }, {
    name: "Extra Shelving",
    description: "Vertical storage, because why not?",
    facility: "Storage Vault",
    effect: 2,
    cost: 20,
    requirement: 50,
    unlocked: true,
    active: false,
  }, {
    name: "Digital Inventory",
    description: "Track your salt with the push of a button.",
    facility: "Storage Vault",
    effect: 2,
    cost: 50,
    requirement: 60,
    unlocked: true,
    active: false,
  }, {
    name: "Robotic Assistants",
    description: "Let the bots do the heavy lifting.",
    facility: "Storage Vault",
    effect: 2,
    cost: 150,
    requirement: 70,
    unlocked: false,
    active: false,
  }, {
    name: "Lighting Installation",
    description: "See your salt in a whole new light.",
    facility: "Storage Vault",
    effect: 2,
    cost: 300,
    requirement: 80,
    unlocked: false,
    active: false,
  }, {
    name: "Insulated Walls",
    description: "Keep the heat out and the salt fresh.",
    facility: "Storage Vault",
    effect: 2,
    cost: 150,
    requirement: 90,
    unlocked: false,
    active: false,
  }, {
    name: "Luxury Vault",
    description: "Because your salt deserves the best.",
    facility: "Storage Vault",
    effect: 2,
    cost: 300,
    requirement: 100,
    unlocked: false,
    active: false,
  }, {
    name: "Basic Tool Kit",
    description: "Fixes for your pickaxes, because chips happen.",
    facility: "Workshop",
    effect: 2,
    cost: 50,
    requirement: 10,
    unlocked: true,
    active: false,
  }, {
    name: "Advanced Tools",
    description: "Sharper, stronger, faster. The trifecta of tools.",
    facility: "Workshop",
    effect: 2,
    cost: 100,
    requirement: 20,
    unlocked: true,
    active: false,
  }, {
    name: "Power Tools",
    description: "Because manual labor is so last century.",
    facility: "Workshop",
    effect: 2,
    cost: 200,
    requirement: 30,
    unlocked: false,
    active: false,
  }, {
    name: "Tool Storage",
    description: "Organize your tools, organize your life.",
    facility: "Workshop",
    effect: 2,
    cost: 500,
    requirement: 40,
    unlocked: false,
    active: false,
  }, {
    name: "Workbench Upgrade",
    description: "More space for your projects. Spread out!",
    facility: "Workshop",
    effect: 2,
    cost: 50,
    requirement: 50,
    unlocked: true,
    active: false,
  }, {
    name: "Lighting Upgrade",
    description: "See what you're fixing, in HD.",
    facility: "Workshop",
    effect: 2,
    cost: 100,
    requirement: 60,
    unlocked: true,
    active: false,
  }, {
    name: "Blueprints Library",
    description: "Know-how at your fingertips.",
    facility: "Workshop",
    effect: 2,
    cost: 200,
    requirement: 70,
    unlocked: false,
    active: false,
  }, {
    name: "Automation Assistants",
    description: "Let the machines do the tinkering.",
    facility: "Workshop",
    effect: 2,
    cost: 500,
    requirement: 80,
    unlocked: false,
    active: false,
  }, {
    name: "Smart Tools",
    description: "Tools that think. Almost like magic.",
    facility: "Workshop",
    effect: 2,
    cost: 200,
    requirement: 90,
    unlocked: false,
    active: false,
  }, {
    name: "Workshop Expansion",
    description: "More space, more tools, more possibilities.",
    facility: "Workshop",
    effect: 2,
    cost: 500,
    requirement: 100,
    unlocked: false,
    active: false,
  }, {
    name: "Basic Sorting",
    description: "Turn junk into slightly better junk.",
    facility: "Salvage Yard",
    effect: 2,
    cost: 30,
    requirement: 10,
    unlocked: false,
    active: false,
  }, {
    name: "Recycling Station",
    description: "Reduce, reuse, re-salt.",
    facility: "Salvage Yard",
    effect: 2,
    cost: 70,
    requirement: 20,
    unlocked: false,
    active: false,
  }, {
    name: "Enhanced Security",
    description: "Keep your treasures safe from would-be scavengers.",
    facility: "Salvage Yard",
    effect: 2,
    cost: 140,
    requirement: 30,
    unlocked: false,
    active: false,
  }, {
    name: "Automated Sorting",
    description: "Let the machines find the diamonds in the rough.",
    facility: "Salvage Yard",
    effect: 2,
    cost: 350,
    requirement: 40,
    unlocked: false,
    active: false,
  }, {
    name: "Trade Deals",
    description: "Get better stuff for your old stuff.",
    facility: "Salvage Yard",
    effect: 2,
    cost: 30,
    requirement: 50,
    unlocked: false,
    active: false,
  }, {
    name: "Parts Library",
    description: "Find that one part you need. It's here somewhere.",
    facility: "Salvage Yard",
    effect: 2,
    cost: 70,
    requirement: 60,
    unlocked: false,
    active: false,
  }, {
    name: "Storage Expansion",
    description: "More space for all your collected goodies.",
    facility: "Salvage Yard",
    effect: 2,
    cost: 140,
    requirement: 70,
    unlocked: false,
    active: false,
  }, {
    name: "Lighting Installation",
    description: "See what you're salvaging. It helps.",
    facility: "Salvage Yard",
    effect: 2,
    cost: 350,
    requirement: 80,
    unlocked: false,
    active: false,
  }, {
    name: "Advanced Recycling",
    description: "Turn junk into treasure with high-tech magic.",
    facility: "Salvage Yard",
    effect: 2,
    cost: 140,
    requirement: 90,
    unlocked: false,
    active: false,
  }, {
    name: "Salvage Network",
    description: "Connect with other yards. Share the wealth.",
    facility: "Salvage Yard",
    effect: 2,
    cost: 350,
    requirement: 100,
    unlocked: false,
    active: false,
  }, {
    name: "Basic Market Stall",
    description: "Set up shop and start trading.",
    facility: "Trade Hub",
    effect: 2,
    cost: 50,
    requirement: 10,
    unlocked: false,
    active: false,
  }, {
    name: "Trade Expansion",
    description: "More goods, more deals, more salt.",
    facility: "Trade Hub",
    effect: 2,
    cost: 100,
    requirement: 20,
    unlocked: false,
    active: false,
  }, {
    name: "Security Upgrade",
    description: "Keep your trades safe from sticky fingers.",
    facility: "Trade Hub",
    effect: 2,
    cost: 200,
    requirement: 30,
    unlocked: false,
    active: false,
  }, {
    name: "Communication Boost",
    description: "Reach more traders, make more deals.",
    facility: "Trade Hub",
    effect: 2,
    cost: 500,
    requirement: 40,
    unlocked: false,
    active: false,
  }, {
    name: "Digital Marketplace",
    description: "Trade online, because why not?",
    facility: "Trade Hub",
    effect: 2,
    cost: 50,
    requirement: 50,
    unlocked: false,
    active: false,
  }, {
    name: "Barter System",
    description: "Swap goods like the old days. Nostalgia!",
    facility: "Trade Hub",
    effect: 2,
    cost: 100,
    requirement: 60,
    unlocked: false,
    active: false,
  }, {
    name: "Trade Caravan",
    description: "Bring the market to you. Fancy, right?",
    facility: "Trade Hub",
    effect: 2,
    cost: 200,
    requirement: 70,
    unlocked: false,
    active: false,
  }, {
    name: "Warehouse Storage",
    description: "Keep your trade goods safe and sound.",
    facility: "Trade Hub",
    effect: 2,
    cost: 500,
    requirement: 80,
    unlocked: false,
    active: false,
  }, {
    name: "Luxury Goods",
    description: "Because sometimes, you need a little bling.",
    facility: "Trade Hub",
    effect: 2,
    cost: 200,
    requirement: 90,
    unlocked: false,
    active: false,
  }, {
    name: "Global Network",
    description: "Trade with the world. Think big!",
    facility: "Trade Hub",
    effect: 2,
    cost: 500,
    requirement: 100,
    unlocked: false,
    active: false,
  }, {
    name: "Basic Scanner",
    description: "Identify your ore. Is it gold? Is it salt?",
    facility: "Ore Analyzer",
    effect: 2,
    cost: 30,
    requirement: 10,
    unlocked: false,
    active: false,
  }, {
    name: "Enhanced Precision",
    description: "Get the details, down to the last particle.",
    facility: "Ore Analyzer",
    effect: 2,
    cost: 70,
    requirement: 20,
    unlocked: false,
    active: false,
  }, {
    name: "Speed Boost",
    description: "Analyze faster, mine smarter.",
    facility: "Ore Analyzer",
    effect: 2,
    cost: 150,
    requirement: 30,
    unlocked: false,
    active: false,
  }, {
    name: "Data Storage",
    description: "Keep records of all your finds. For science!",
    facility: "Ore Analyzer",
    effect: 2,
    cost: 300,
    requirement: 40,
    unlocked: false,
    active: false,
  }, {
    name: "Portable Analyzer",
    description: "Take your analysis on the go.",
    facility: "Ore Analyzer",
    effect: 2,
    cost: 30,
    requirement: 50,
    unlocked: false,
    active: false,
  }, {
    name: "Remote Access",
    description: "Analyze from anywhere. Modern tech!",
    facility: "Ore Analyzer",
    effect: 2,
    cost: 70,
    requirement: 60,
    unlocked: false,
    active: false,
  }, {
    name: "3D Mapping",
    description: "See inside the rock. It's like X-ray vision.",
    facility: "Ore Analyzer",
    effect: 2,
    cost: 150,
    requirement: 70,
    unlocked: false,
    active: false,
  }, {
    name: "AI Assistance",
    description: "Let the robots do the thinking.",
    facility: "Ore Analyzer",
    effect: 2,
    cost: 300,
    requirement: 80,
    unlocked: false,
    active: false,
  }, {
    name: "High-Res Imaging",
    description: "See every detail, in stunning clarity.",
    facility: "Ore Analyzer",
    effect: 2,
    cost: 150,
    requirement: 90,
    unlocked: false,
    active: false,
  }, {
    name: "Quantum Analyzer",
    description: "Because quantum makes everything better.",
    facility: "Ore Analyzer",
    effect: 2,
    cost: 300,
    requirement: 100,
    unlocked: false,
    active: false,
  }, {
    name: "Basic Mapping",
    description: "Find the best spots to dig. No more guessing.",
    facility: "Geological Scanner",
    effect: 2,
    cost: 40,
    requirement: 10,
    unlocked: false,
    active: false,
  }, {
    name: "Depth Analysis",
    description: "Know how deep to dig. Avoid unnecessary work.",
    facility: "Geological Scanner",
    effect: 2,
    cost: 80,
    requirement: 20,
    unlocked: false,
    active: false,
  }, {
    name: "Mineral Detection",
    description: "Find the rare stuff. It's in there somewhere.",
    facility: "Geological Scanner",
    effect: 2,
    cost: 160,
    requirement: 30,
    unlocked: false,
    active: false,
  }, {
    name: "Wide Area Scan",
    description: "Cover more ground with every scan.",
    facility: "Geological Scanner",
    effect: 2,
    cost: 400,
    requirement: 40,
    unlocked: false,
    active: false,
  }, {
    name: "AI Predictions",
    description: "Let the machines do the guessing.",
    facility: "Geological Scanner",
    effect: 2,
    cost: 40,
    requirement: 50,
    unlocked: false,
    active: false,
  }, {
    name: "Historical Data",
    description: "See past mining activity. Learn from the past.",
    facility: "Geological Scanner",
    effect: 2,
    cost: 80,
    requirement: 60,
    unlocked: false,
    active: false,
  }, {
    name: "Remote Control",
    description: "Scan from a distance. Because convenience.",
    facility: "Geological Scanner",
    effect: 2,
    cost: 160,
    requirement: 70,
    unlocked: false,
    active: false,
  }, {
    name: "3D Visualization",
    description: "See the underground in three dimensions.",
    facility: "Geological Scanner",
    effect: 2,
    cost: 400,
    requirement: 80,
    unlocked: false,
    active: false,
  }, {
    name: "Automated Reporting",
    description: "Provides a 3D map of the cave.",
    facility: "Geological Scanner",
    effect: 2,
    cost: 160,
    requirement: 90,
    unlocked: false,
    active: false,
  }, {
    name: "Quantum Scanning",
    description: "Because quantum just sounds cool.",
    facility: "Geological Scanner",
    effect: 2,
    cost: 400,
    requirement: 100,
    unlocked: false,
    active: false,
  }, {
    name: "Basic Upgrade",
    description: "Faster, stronger, better. The trifecta of bots.",
    facility: "Mining Bot",
    effect: 2,
    cost: 60,
    requirement: 10,
    unlocked: false,
    active: false,
  }, {
    name: "Tool Upgrade",
    description: "Sharper tools for more efficient mining.",
    facility: "Mining Bot",
    effect: 2,
    cost: 120,
    requirement: 20,
    unlocked: false,
    active: false,
  }, {
    name: "Speed Boost",
    description: "Mine faster, rest later.",
    facility: "Mining Bot",
    effect: 2,
    cost: 250,
    requirement: 30,
    unlocked: false,
    active: false,
  }, {
    name: "Durability Boost",
    description: "Longer-lasting bots. Less downtime.",
    facility: "Mining Bot",
    effect: 2,
    cost: 600,
    requirement: 40,
    unlocked: false,
    active: false,
  }, {
    name: "AI Enhancement",
    description: "Smarter bots for smarter mining.",
    facility: "Mining Bot",
    effect: 2,
    cost: 60,
    requirement: 50,
    unlocked: false,
    active: false,
  }, {
    name: "Energy Efficiency",
    description: "Mine more, use less power.",
    facility: "Mining Bot",
    effect: 2,
    cost: 120,
    requirement: 60,
    unlocked: false,
    active: false,
  }, {
    name: "Multi-Tool Adaptation",
    description: "One bot, many tools. Versatility!",
    facility: "Mining Bot",
    effect: 2,
    cost: 250,
    requirement: 70,
    unlocked: false,
    active: false,
  }, {
    name: "Remote Control",
    description: "Control your bots from anywhere.",
    facility: "Mining Bot",
    effect: 2,
    cost: 600,
    requirement: 80,
    unlocked: false,
    active: false,
  }, {
    name: "Self-Repair",
    description: "Bots that fix themselves. Genius!",
    facility: "Mining Bot",
    effect: 2,
    cost: 250,
    requirement: 90,
    unlocked: false,
    active: false,
  }, {
    name: "Quantum Bots",
    description: "Quantum-powered for ultimate efficiency.",
    facility: "Mining Bot",
    effect: 2,
    cost: 600,
    requirement: 100,
    unlocked: false,
    active: false,
  }, {
    name: "Basic Efficiency",
    description: "More power, less fuel. It's like magic.",
    facility: "Energy Generator",
    effect: 2,
    cost: 50,
    requirement: 10,
    unlocked: false,
    active: false,
  }, {
    name: "Fuel Upgrade",
    description: "Use better fuel, get better power.",
    facility: "Energy Generator",
    effect: 2,
    cost: 100,
    requirement: 20,
    unlocked: false,
    active: false,
  }, {
    name: "Solar Panels",
    description: "Harness the power of the sun. Even underground.",
    facility: "Energy Generator",
    effect: 2,
    cost: 200,
    requirement: 30,
    unlocked: false,
    active: false,
  }, {
    name: "Wind Turbines",
    description: "Catch the underground breeze.",
    facility: "Energy Generator",
    effect: 2,
    cost: 500,
    requirement: 40,
    unlocked: false,
    active: false,
  }, {
    name: "Battery Storage",
    description: "Store power for when you need it most.",
    facility: "Energy Generator",
    effect: 2,
    cost: 50,
    requirement: 50,
    unlocked: false,
    active: false,
  }, {
    name: "Smart Grid",
    description: "Efficient power distribution. It's smart.",
    facility: "Energy Generator",
    effect: 2,
    cost: 100,
    requirement: 60,
    unlocked: false,
    active: false,
  }, {
    name: "Backup Generators",
    description: "Because outages are not fun.",
    facility: "Energy Generator",
    effect: 2,
    cost: 200,
    requirement: 70,
    unlocked: false,
    active: false,
  }, {
    name: "AI Management",
    description: "Let the machines handle the power.",
    facility: "Energy Generator",
    effect: 2,
    cost: 500,
    requirement: 80,
    unlocked: false,
    active: false,
  }, {
    name: "Fusion Power",
    description: "Because fusion is the future.",
    facility: "Energy Generator",
    effect: 2,
    cost: 200,
    requirement: 90,
    unlocked: false,
    active: false,
  }, {
    name: "Quantum Energy",
    description: "Quantum-powered for ultimate efficiency.",
    facility: "Energy Generator",
    effect: 2,
    cost: 500,
    requirement: 100,
    unlocked: false,
    active: false,
  }, {
    name: "Basic Molds",
    description: "Turn your salt into something beautiful.",
    facility: "Salt Shaper",
    effect: 2,
    cost: 40,
    requirement: 10,
    unlocked: false,
    active: false,
  }, {
    name: "Artisan Tools",
    description: "For the finer details. It's all in the details.",
    facility: "Salt Shaper",
    effect: 2,
    cost: 80,
    requirement: 20,
    unlocked: false,
    active: false,
  }, {
    name: "Advanced Shaping",
    description: "More shapes, more options.",
    facility: "Salt Shaper",
    effect: 2,
    cost: 160,
    requirement: 30,
    unlocked: false,
    active: false,
  }, {
    name: "Automated Shaping",
    description: "Let the machines do the art.",
    facility: "Salt Shaper",
    effect: 2,
    cost: 400,
    requirement: 40,
    unlocked: false,
    active: false,
  }, {
    name: "Lighting Integration",
    description: "Illuminate your masterpieces.",
    facility: "Salt Shaper",
    effect: 2,
    cost: 40,
    requirement: 50,
    unlocked: false,
    active: false,
  }, {
    name: "Color Infusion",
    description: "Add a touch of color to your salt.",
    facility: "Salt Shaper",
    effect: 2,
    cost: 80,
    requirement: 60,
    unlocked: false,
    active: false,
  }, {
    name: "High-Precision Tools",
    description: "For the perfectionist in you.",
    facility: "Salt Shaper",
    effect: 2,
    cost: 160,
    requirement: 70,
    unlocked: false,
    active: false,
  }, {
    name: "AI Design",
    description: "Let the machines design the art.",
    facility: "Salt Shaper",
    effect: 2,
    cost: 400,
    requirement: 80,
    unlocked: false,
    active: false,
  }, {
    name: "Luxury Shapes",
    description: "Because your salt deserves the best.",
    facility: "Salt Shaper",
    effect: 2,
    cost: 160,
    requirement: 90,
    unlocked: false,
    active: false,
  }, {
    name: "Quantum Shaping",
    description: "Quantum-powered for ultimate artistry.",
    facility: "Salt Shaper",
    effect: 2,
    cost: 400,
    requirement: 100,
    unlocked: false,
    active: false,
  }, {
    name: "Basic Boost",
    description: "Turn it up a notch. More power!",
    facility: "Mining Amplifier",
    effect: 2,
    cost: 50,
    requirement: 10,
    unlocked: false,
    active: false,
  }, {
    name: "Frequency Tuning",
    description: "Find the perfect frequency for your needs.",
    facility: "Mining Amplifier",
    effect: 2,
    cost: 100,
    requirement: 20,
    unlocked: false,
    active: false,
  }, {
    name: "Range Extension",
    description: "Cover more ground with every pulse.",
    facility: "Mining Amplifier",
    effect: 2,
    cost: 200,
    requirement: 30,
    unlocked: false,
    active: false,
  }, {
    name: "Power Surge",
    description: "More power, more mining.",
    facility: "Mining Amplifier",
    effect: 2,
    cost: 500,
    requirement: 40,
    unlocked: false,
    active: false,
  }, {
    name: "AI Calibration",
    description: "Perfect tuning, every time.",
    facility: "Mining Amplifier",
    effect: 2,
    cost: 50,
    requirement: 50,
    unlocked: false,
    active: false,
  }, {
    name: "Energy Efficiency",
    description: "More mining, less power.",
    facility: "Mining Amplifier",
    effect: 2,
    cost: 100,
    requirement: 60,
    unlocked: false,
    active: false,
  }, {
    name: "Smart Control",
    description: "Control your amplifier from anywhere.",
    facility: "Mining Amplifier",
    effect: 2,
    cost: 200,
    requirement: 70,
    unlocked: false,
    active: false,
  }, {
    name: "Backup Systems",
    description: "Because outages are not fun.",
    facility: "Mining Amplifier",
    effect: 2,
    cost: 500,
    requirement: 80,
    unlocked: false,
    active: false,
  }, {
    name: "Fusion Amplifier",
    description: "Because fusion is the future.",
    facility: "Mining Amplifier",
    effect: 2,
    cost: 200,
    requirement: 90,
    unlocked: false,
    active: false,
  }, {
    name: "Quantum Amplifier",
    description: "Quantum-powered for ultimate efficiency.",
    facility: "Mining Amplifier",
    effect: 2,
    cost: 500,
    requirement: 100,
    unlocked: false,
    active: false,
  }, {
    name: "Basic Upgrade",
    description: "Faster, stronger, better. The trifecta of drones.",
    facility: "Exploration Drone",
    effect: 2,
    cost: 60,
    requirement: 10,
    unlocked: false,
    active: false,
  }, {
    name: "Camera Upgrade",
    description: "See more, see better.",
    facility: "Exploration Drone",
    effect: 2,
    cost: 120,
    requirement: 20,
    unlocked: false,
    active: false,
  }, {
    name: "Range Extension",
    description: "Explore further, find more.",
    facility: "Exploration Drone",
    effect: 2,
    cost: 250,
    requirement: 30,
    unlocked: false,
    active: false,
  }, {
    name: "AI Navigation",
    description: "Smarter drones for smarter exploration.",
    facility: "Exploration Drone",
    effect: 2,
    cost: 600,
    requirement: 40,
    unlocked: false,
    active: false,
  }, {
    name: "Energy Efficiency",
    description: "Explore more, use less power.",
    facility: "Exploration Drone",
    effect: 2,
    cost: 60,
    requirement: 50,
    unlocked: false,
    active: false,
  }, {
    name: "Multi-Tool Adaptation",
    description: "One drone, many tools. Versatility!",
    facility: "Exploration Drone",
    effect: 2,
    cost: 120,
    requirement: 60,
    unlocked: false,
    active: false,
  }, {
    name: "Remote Control",
    description: "Control your drones from anywhere.",
    facility: "Exploration Drone",
    effect: 2,
    cost: 250,
    requirement: 70,
    unlocked: false,
    active: false,
  }, {
    name: "Self-Repair",
    description: "Drones that fix themselves. Genius!",
    facility: "Exploration Drone",
    effect: 2,
    cost: 600,
    requirement: 80,
    unlocked: false,
    active: false,
  }, {
    name: "High-Res Imaging",
    description: "See every detail, in stunning clarity.",
    facility: "Exploration Drone",
    effect: 2,
    cost: 250,
    requirement: 90,
    unlocked: false,
    active: false,
  }, {
    name: "Quantum Drones",
    description: "Quantum-powered for ultimate exploration.",
    facility: "Exploration Drone",
    effect: 2,
    cost: 600,
    requirement: 100,
    unlocked: false,
    active: false,
  }, {
    name: "Basic Drill Bit",
    description: "Sharper bits for more efficient drilling.",
    facility: "Drill Station",
    effect: 2,
    cost: 100,
    requirement: 10,
    unlocked: false,
    active: false,
  }, {
    name: "Power Boost",
    description: "More power, faster drilling.",
    facility: "Drill Station",
    effect: 2,
    cost: 200,
    requirement: 20,
    unlocked: false,
    active: false,
  }, {
    name: "Speed Upgrade",
    description: "Drill faster, mine more.",
    facility: "Drill Station",
    effect: 2,
    cost: 400,
    requirement: 30,
    unlocked: false,
    active: false,
  }, {
    name: "Durability Boost",
    description: "Longer-lasting drills. Less downtime.",
    facility: "Drill Station",
    effect: 2,
    cost: 1000,
    requirement: 40,
    unlocked: false,
    active: false,
  }, {
    name: "AI Assistance",
    description: "Smarter drilling for smarter mining.",
    facility: "Drill Station",
    effect: 2,
    cost: 100,
    requirement: 50,
    unlocked: false,
    active: false,
  }, {
    name: "Energy Efficiency",
    description: "Drill more, use less power.",
    facility: "Drill Station",
    effect: 2,
    cost: 200,
    requirement: 60,
    unlocked: false,
    active: false,
  }, {
    name: "Multi-Bit Adaptation",
    description: "One drill, many bits. Versatility!",
    facility: "Drill Station",
    effect: 2,
    cost: 400,
    requirement: 70,
    unlocked: false,
    active: false,
  }, {
    name: "Remote Control",
    description: "Control your drills from anywhere.",
    facility: "Drill Station",
    effect: 2,
    cost: 1000,
    requirement: 80,
    unlocked: false,
    active: false,
  }, {
    name: "Self-Sharpening Bits",
    description: "Bits that sharpen themselves. Genius!",
    facility: "Drill Station",
    effect: 2,
    cost: 400,
    requirement: 90,
    unlocked: false,
    active: false,
  }, {
    name: "Quantum Drills",
    description: "Quantum-powered for ultimate efficiency.",
    facility: "Drill Station",
    effect: 2,
    cost: 1000,
    requirement: 100,
    unlocked: false,
    active: false,
  }, {
    name: "Basic Filter",
    description: "Clean your salt, one grain at a time.",
    facility: "Salt Refinery",
    icon: "filter",
    effect: 2,
    cost: 150,
    requirement: 10,
    unlocked: false,
    active: false,
  }, {
    name: "Enhanced Purity",
    description: "Get the purest salt possible.",
    facility: "Salt Refinery",
    icon: "filter",
    effect: 2,
    cost: 300,
    requirement: 20,
    unlocked: false,
    active: false,
  }, {
    name: "Speed Boost",
    description: "Refine faster, mine more.",
    facility: "Salt Refinery",
    icon: "filter",
    effect: 2,
    cost: 600,
    requirement: 30,
    unlocked: false,
    active: false,
  }, {
    name: "Automated Processes",
    description: "Let the machines do the refining.",
    facility: "Salt Refinery",
    icon: "filter",
    effect: 2,
    cost: 1200,
    requirement: 40,
    unlocked: false,
    active: false,
  }, {
    name: "Energy Efficiency",
    description: "Refine more, use less power.",
    facility: "Salt Refinery",
    icon: "filter",
    effect: 2,
    cost: 150,
    requirement: 50,
    unlocked: false,
    active: false,
  }, {
    name: "AI Quality Control",
    description: "Perfect salt, every time.",
    facility: "Salt Refinery",
    icon: "filter",
    effect: 2,
    cost: 300,
    requirement: 60,
    unlocked: false,
    active: false,
  }, {
    name: "Multi-Stage Refining",
    description: "Get the best salt possible.",
    facility: "Salt Refinery",
    icon: "filter",
    effect: 2,
    cost: 600,
    requirement: 70,
    unlocked: false,
    active: false,
  }, {
    name: "Remote Monitoring",
    description: "Keep an eye on your refinery from anywhere.",
    facility: "Salt Refinery",
    icon: "filter",
    effect: 2,
    cost: 1200,
    requirement: 80,
    unlocked: false,
    active: false,
  }, {
    name: "Luxury Refining",
    description: "Because your salt deserves the best.",
    facility: "Salt Refinery",
    icon: "filter",
    effect: 2,
    cost: 600,
    requirement: 90,
    unlocked: false,
    active: false,
  }, {
    name: "Quantum Refining",
    description: "Quantum-powered for ultimate purity.",
    facility: "Salt Refinery",
    icon: "filter",
    effect: 2,
    cost: 1200,
    requirement: 100,
    unlocked: false,
    active: false,
  }
];

let store = browser ? localStorage.getItem("upgrades") : null;
let parse = store ? JSON.parse(store) : initUpgrades;

export let upgrades = writable(parse);

upgrades.subscribe((value) => {
  if (browser) {
    localStorage.setItem("upgrades", JSON.stringify(value));
  }
});
