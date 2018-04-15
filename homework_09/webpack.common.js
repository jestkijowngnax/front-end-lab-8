const Path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: {
		app: './src/app.js'
	},
	module: {
		rules: [
		{
			test: /\.js$/,
			loader: 'babel-loader'
		},
		{
			test: /\.scss$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: ['css-loader', 'sass-loader']
			})
		},
		]
	},
	plugins: [
		new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
		new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/app.html',
    }),
		new ExtractTextPlugin('style.css'),
		new CleanWebpackPlugin(['bin'])
	],

	output: {
		path: Path.resolve(__dirname, 'bin'),
		filename: 'app.bundle.js'
	}
};