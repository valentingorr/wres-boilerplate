const path = require("path");
 
module.exports = {
	devServer: {
		historyApiFallback: true,
	},
	mode: "development",
	entry: {
		app: [
			"./src/index.jsx"
		]
	},
	module: {
		rules: [
			{
				test: (m) => { return /\.(js|jsx)$/.test(m) },
				exclude: (m) => { return /node_modules/.test(m) },
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							"@babel/preset-env",
							"@babel/preset-react"
						]
					}
				}
			},
			{
				test: (m) => { return /\.css$/.test(m) },
				exclude: (m) => { return /node_modules/.test(m) },
				use: [
					"style-loader",
					"css-loader"
				]
			},
			{
				test: (m) => { return /\.scss$/.test(m) },
				exclude: (m) => { return /node_modules/.test(m) },
				use: [
					"style-loader",
					"css-loader",
					"sass-loader"
				]
			},
			{
				test: (m) => { return /\.(png|jp(e*)g)$/.test(m) },
				exclude: (m) => { return /node_modules/.test(m) },
				use: [{
					loader: "url-loader",
					options: {
						limit: 8000,
						name: "images/[hash]-[name].[ext]"
					}
				}]
			},
			{
				test: (m) => { return /\.svg$/.test(m) },
				exclude: (m) => { return /node_modules/.test(m) },
				use: ["@svgr/webpack", "url-loader"]
			}
		]
	},
	plugins: [],
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "./dist"),
		publicPath: "/"
	}
};
