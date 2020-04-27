const path = require("path");
const SRC_PATH = path.resolve(__dirname, "../src");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  entry: {
    main: "./src/index.js",
  },
  resolve: {
    extensions: [".vue", ".js"],
    alias: {
      "@": SRC_PATH,
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.js$/,
        use: "babel-loader",

        exclude: /node_modules/,
        include: SRC_PATH,
      },
      {
        test: /\.(woff|svg|eot|woff2|tff)$/,
        use: [
          {
            loader: "url-loader",
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
