module.exports = {
  name: 'weather-app',
  exposes: {
    './Module': 'apps/weather-app/src/app/remote-entry/entry.module.ts',
  },
};
