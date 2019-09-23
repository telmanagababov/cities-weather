export const environment = {
  production: true,
  cities: [
    { title: 'London', query: 'London', preview: 'london' },
    { title: 'Cairo', query: 'Cairo', preview: 'egypt' },
    { title: 'Amsterdam', query: 'Amsterdam', preview: 'amsterdam' },
    { title: 'Sidney', query: 'Sidney', preview: 'australia' },
    { title: 'Vancouver', query: 'Vancouver', preview: 'canada' }
  ],
  communication: {
    gateway: 'http://api.openweathermap.org/data/2.5',
    apiKey: '4492fefd587d2979386d05539af87940',
    updateTimeout: 3600000
  }
};
