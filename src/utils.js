export const defaultCityData = {
  LocalizedName: 'Tel Aviv',
  Key: '215854',
  Country: {
    LocalizedName: 'Israel',
  },
}

const cToFahr = (c) => {
  return (c * 9 / 5 + 32).toFixed(1);
}

export const getDegree = (value, measureUnit) => {
  return measureUnit === 'fahrenheit' ? cToFahr(value) : value;
}