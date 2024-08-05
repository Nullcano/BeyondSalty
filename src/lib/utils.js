export const randomItem = (arr) => arr[(Math.random() * arr.length) | 0];
export const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const createSlug = string => string.toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').replace(/^-+|-+$/g, '');
export function formatNumber(number) {
  if (isNaN(number)) return;

  const absNumber = Math.abs(number);
  if (absNumber >= 1e24) {
    return (number / 1e24).toFixed(2) + ' Sp';
  } else if (absNumber >= 1e21) {
    return (number / 1e21).toFixed(2) + ' Sx';
  } else if (absNumber >= 1e18) {
    return (number / 1e18).toFixed(2) + ' Qi';
  } else if (absNumber >= 1e15) {
    return (number / 1e15).toFixed(2) + ' Qa';
  } else if (absNumber >= 1e12) {
    return (number / 1e12).toFixed(2) + ' T';
  } else if (absNumber >= 1e9) {
    return (number / 1e9).toFixed(2) + ' B';
  } else if (absNumber >= 1e6) {
    return (number / 1e6).toFixed(2) + ' M';
  } else if (absNumber >= 1e3) {
    return (number / 1e3).toFixed(2) + ' K';
  } else {
    return number.toFixed(0);
  }
}
export function convertWeight(value) {
  const units = [
      { name: 'gram', plural: 'grams', limit: 1000 },
      { name: 'kilogram', plural: 'kilograms', limit: 1000 },
      { name: 'metric ton', plural: 'metric tons', limit: 1000 },
      { name: 'kilotonne', plural: 'kilotonnes', limit: 1000 },
      { name: 'megatonne', plural: 'megatonnes', limit: 1000 },
      { name: 'gigatonne', plural: 'gigatonnes', limit: 1000 },
      { name: 'teratonne', plural: 'teratonnes', limit: 1000 },
      { name: 'petatonne', plural: 'petatonnes', limit: 1000 },
      { name: 'exatonne', plural: 'exatonnes', limit: 1000 },
      { name: 'zettatonne', plural: 'zettatonnes', limit: 1000 },
      { name: 'yottatonne', plural: 'yottatonnes', limit: Infinity }
  ];

  let unitIndex = 0;
  while (value >= units[unitIndex].limit && unitIndex < units.length - 1) {
    value /= units[unitIndex].limit;
    unitIndex++;
  }
  const unit = units[unitIndex];
  const roundedValue = Math.round(value * 100) / 100;
  const unitName = roundedValue === 1 ? unit.name : unit.plural;
  return `<span class="value">${roundedValue}</span> <span class="unit">${unitName}</span>`;
}