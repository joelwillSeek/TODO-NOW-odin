const path = require("path");
const htmlWebpack = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][contenthash].js",
    assetModuleFilename: "[name][ext]",
    clean: true,
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    historyApiFallback: true,
    hot: true,
    compress: true,
    open: true,
  },
  plugins: [
    new htmlWebpack({
      title: "TODO NOW",
      template: "src/template.html",
      filename: "index.html",
    }),
  ],
};
