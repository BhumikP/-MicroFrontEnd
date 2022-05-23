const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8082,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "cart",
      filename: "remoteEntry.js",
      exposes: {
        "./CartShow": "./src/index",
      },
      //Modules that are shared b/w two repos
      shared: ["faker"],
      //    {
      //     faker: {
      //       //No matter what,load only one copy of this package
      //       singleton: true,
      //     },
      //   },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
