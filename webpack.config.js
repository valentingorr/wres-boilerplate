const path = require("path");

module.exports = {
	mode: "development",
	entry: {
		app: [
			"./src/index.jsx"
		]
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: { loader: 'babel-loader'}
			},
			{ 
				test: /\.css?$/,
				use: [
				{ loader: "style-loader" },
				{ loader: "css-loader" },
				]
			},
		]
	},
	plugins: [],
	output: {
	filename: "[name].bundle.js",
	path: path.resolve(__dirname, "./dist"),
	publicPath: "/"
	}
};
