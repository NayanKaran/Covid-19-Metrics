import getCoronavirusData from './coronavirusAPI';

test('getCoronavirusData function', async () => {
  const details = await getCoronavirusData();
  expect(details.global.Asia.all).toBeGreaterThanOrEqual(0);
});
