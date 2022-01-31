const path = require("path");

module.exports = {
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
    domains: [
      {
        domain: 'quelchx.com',
        defaultLocale: 'en-US',
      },
    ]
  },
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname);
    return config;
  },
};
