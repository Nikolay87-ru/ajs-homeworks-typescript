import { resolve as _resolve } from "node:path";
import { fileURLToPath } from "node:url";
import HtmlWebPackPlugin from "html-webpack-plugin";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const config = {
  mode: 'development',
  entry: "./src/index.ts",
  output: {
    path: _resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true
  },
  resolve: {
    extensions: [".js", ".jsx", ".tsx", ".ts"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      inject: true
    })
  ]
};

export default config;
