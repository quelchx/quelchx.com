const { withContentlayer } = require("next-contentlayer");
const path = require("path");

module.exports = withContentlayer()({
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname);
    return config;
  },
});
