const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  output: {
    filename: "main.[contenthash].js"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(png|jpg|pdf|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "assets/"
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      favicon: "./src/assets/favicon.png"
    }),
    new HtmlWebpackPlugin({
      filename: "design.html",
      template: "./src/design.html",
      favicon: "./src/assets/favicon.png"
    }),
    new HtmlWebpackPlugin({
      filename: "development.html",
      template: "./src/development.html",
      favicon: "./src/assets/favicon.png"
    }),
    new HtmlWebpackPlugin({
      filename: "signup.html",
      template: "./src/signup.html",
      favicon: "./src/assets/favicon.png"
    }),
    new HtmlWebpackPlugin({
      filename: "login.html",
      template: "./src/login.html",
      favicon: "./src/assets/favicon.png"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
      favicon: "./src/assets/favicon.png"
    }),
    new CleanWebpackPlugin()
  ]
};
