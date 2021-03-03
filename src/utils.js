export const defaultCityKey = '215854';

const cToFahr = (c) => {
  return (c * 9 / 5 + 32).toFixed(1);
}

export const getDegree = (value, measureUnit) => {
  return measureUnit === 'fahrenheit' ? cToFahr(value) : value;
}