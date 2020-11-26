const path = require("path");
module.exports = {
  entry: { main: "./src/index.js" },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\m.?js$/,
        exclude: /(node_modules|bower_components)/, //exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            //presets: ["@babel/preset-env"],
            //plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
    ],
  },
  devServer: {
    port: 8000,
    historyApiFallback: true,
    hot: true,
  },
};
// const path = require("path");
// module.exports = {
//   //watch: true,
//   entry: "./src/index.js",
//   output: {
//     filename: "main.js",
//     path: path.resolve(__dirname, "dist"),
//     publicPath: "/",
//   },
//   devServer: {
//     port: 8000,
//     historyApiFallback: true,
//     hot: true,
//   },
// };
