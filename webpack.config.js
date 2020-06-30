const path = require("path");

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "react-optimize.js",
    library: "react-optimize",
    libraryTarget: "umd",
    umdNamedDefine: true,
    globalObject: "this",
  },
  externals: {
    react: "react",
    "prop-types": "prop-types",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
