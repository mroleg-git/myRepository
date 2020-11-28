const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/js/index.js",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/, //exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader",
          options: {
            minimize: true,
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
};
