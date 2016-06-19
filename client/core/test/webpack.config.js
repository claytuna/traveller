var webpack = require('webpack');
var beeps = require('webpack-beep-plugin');

module.exports = {
	entry: './specs/client-tests.js',
	output: {
		filename: './dist/tests.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: /node_modules/,
				include: [ /src/, /client.js/ ],
				query: {
					presets: [ 'es2015', 'react' ]
				}
			},
			{ test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
			{ test: /\.css$/, loader: 'style-loader!css-loader' },
			{
				test: /\.(jpe?g|png|gif|svg|eot|ttf|woff|woff2)$/i,
				loader: 'url-loader'
			}
		]
	},
	devtool: '#inline-source-map',
	resolve:{
		alias: {
			components: __dirname + '/../src/components',
			services: __dirname + '/../src/services',
			RS: __dirname + '/../reactive-store.js',
		}
	},
	plugins: [
		new beeps(),
		new webpack.OldWatchingPlugin(),
		new webpack.ProvidePlugin({
			$j: "jquery",
			_: "lodash",
			Core: __dirname + '../src/components/Core',
			CorePure: __dirname + '../src/components/CorePure',
			Grid: 'react-bootstrap/lib/Grid',
			Row: 'react-bootstrap/lib/Row',
			Col: 'react-bootstrap/lib/Col',
		})	
	]
};