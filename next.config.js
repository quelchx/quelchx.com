/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
    domains: [
      {
        domain: "quelchx.com",
        defaultLocale: "en-US",
      },
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
