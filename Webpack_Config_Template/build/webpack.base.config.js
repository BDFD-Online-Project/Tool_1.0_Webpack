const path = require("path");
const SRC_Path = path.resolve(__dirname, "../src");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  entry: {
    main: "./src/js/index.js",
  },

  resolve: {
    extensions: [".vue", ".js"],
    alias: {
      "@": SRC_Path,
    },
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.js/,
        use: "babel-loader",
        exclude: /node_modules/,
        include: SRC_Path,
      },
      {
        test: /\.(woff|ttf|eot|woff2|svg)$/,
        use: [
          {
            loader: "url-loader",
            include: [path.reslove("src")],
            options: {
              limit: 10000,
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [new VueLoaderPlugin()],
};
