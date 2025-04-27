import { resolve as _resolve, join } from "node:path";
import { fileURLToPath } from "node:url";
import HtmlWebPackPlugin from "html-webpack-plugin";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const config = {
  entry: "./src/index.ts",
  resolve: {
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
  },
  output: {
    path: _resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.html$/,
        use: "html-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: join(__dirname, "dist"),
    },
    compress: true,
    port: 8080,
    hot: true,
  },
};

export default config;
