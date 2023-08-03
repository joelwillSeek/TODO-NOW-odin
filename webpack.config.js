const path = require("path");
const htmlWebpack = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, "src/scripts/dom_manipulator.js"),
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
    port: 3001,
    historyApiFallback: true,
    hot: true,
    compress: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new htmlWebpack({
      title: "TODO NOW",
      template: "src/template.html",
      filename: "index.html",
    }),
  ],
};
