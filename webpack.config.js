const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = (env, argv) => {
    const isProd = argv.mode === 'production';
    const isDev = !isProd;
    const filename = (path, ext) => isProd ?
    `${path}/main.[contenthash]${ext}` : `${path}/main.${ext}`;
    const plugins = () => {
      const base = [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new CopyPlugin({
            patterns: [
                {
                  from: path.resolve(__dirname, 'src', 'img'),
                  to: path.resolve(__dirname, 'dist', 'img')
                },
                {
                  from: path.resolve(__dirname, 'src', 'css'),
                  to: path.resolve(__dirname, 'dist', 'css')
                },
                {
                  from: path.resolve(__dirname, 'src', 'php'),
                  to: path.resolve(__dirname, 'dist', 'php')
                },
            ],
          }),
          new MiniCssExtractPlugin({
            filename: filename('css', '.css'),
          }),
        ];
        if (isDev) {
          base.push(new ESLintPlugin());
        }
        return base;
    };

    return {
        context: path.resolve(__dirname, 'src'),
        entry: {
            main: [
            'core-js/stable',
            'regenerator-runtime/runtime',
            './index.js'
          ],
        },
        output: {
            filename: filename('js', '.js'),
            path: path.resolve(__dirname, 'dist'),
            clean: true,
        },
        resolve: {
            extensions: ['.js'],
            alias: {
                '@': path.resolve(__dirname, 'src'),
                '@core': path.resolve(__dirname, 'src', 'core'),
                '@module': path.resolve(__dirname, 'src', 'module'),
            }
        },
        plugins: plugins(),
        devtool: isDev ? 'source-map' : false,
        module: {
            rules: [
              {
                test: /\.s[ac]ss$/i,
                use: [
                  MiniCssExtractPlugin.loader,
                  // Translates CSS into CommonJS
                  'css-loader',
                  // Compiles Sass to CSS
                  'sass-loader',
                ],
              },
              {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/plugin-proposal-class-properties']
                  }
                }
              },
            ],
          },
        devServer: {
            hot: true,
            watchFiles: './src',
            static: {
                directory: './dist',
                watch: true
            }
        }
    };
};
