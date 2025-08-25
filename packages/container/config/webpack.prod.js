const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        search: `search@${domain}/search/remoteEntry.js`,
        result: `result@${domain}/result/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
};
module.exports = merge(commonConfig, prodConfig);
