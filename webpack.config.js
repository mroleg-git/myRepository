const path = require("path");
module.exports = {
  entry: { main: "./src/js/index.js" },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\m.?js$/,
        exclude: /(node_modules)/, //exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    //publicPath: "/",
    //index: "index.html",
    //openPage: "./source/index.html",
  },
};
