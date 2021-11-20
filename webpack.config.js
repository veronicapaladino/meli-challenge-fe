const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  output: {
      path: path.resolve(__dirname, 'dist'), // Indicamos carpeta de salida
      publicPath: "/"
  },
  resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'], // Entendemos tsx
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }) // Generamos html
  ],
  module: {
    rules: [
      {
        // Pasamos por babel extensiones de react
        test: /\.(js|jsx|ts|tsx)$/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-react',
              {
                // Al entender que estamos en react infiere su importacion
                runtime: 'automatic'
              }
            ]
          ],
        }
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        // Pasamos por babel scss/css
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash]-[name].[ext]',
            },
          },
        ],
      },
    ]
  },
  devServer: {
    // Se abre el navegador con npm run start-dev
    open: true,
    port: 9000,
    historyApiFallback: true
  },
  devtool: false,
}