const path = require("path")
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "src"),
    inline: true,
    hot: true
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    modules: [path.join(__dirname, "src"), "node_modules"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        use: [
          { loader: "babel-loader" },
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true
            }
          },
          { loader: "tslint-loader" }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      }
    ]
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({ template: "./src/index.html" })
  ]
}
