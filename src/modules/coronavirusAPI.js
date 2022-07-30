export default async function getCoronavirusData() {
  const response = await fetch('https://aqueous-island-86825.herokuapp.com/', {
    method: 'GET',
  });
  const countries = await response.json();
  const restructuredData = {};
  restructuredData.global = {};
  restructuredData.global.all = countries.Global.All.confirmed;
  Object.keys(countries).forEach((country) => {
    if (countries[country].All.continent) {
      const { continent } = countries[country].All;
      if (!restructuredData.global[continent]) restructuredData.global[continent] = {};
      restructuredData.global[continent].all = restructuredData.global[continent].all
        ? restructuredData.global[continent].all + countries[country].All.confirmed
        : countries[country].All.confirmed;
      restructuredData.global[continent][country] = countries[country].All.confirmed;
    }
  });
  return restructuredData;
}
