require("dotenv").config();
const PORT = process.env.PORT || 3000;

const path = require("path");

const webpack = require("webpack");
const webpackMiddleware = require("webpack-dev-middleware");
const express = require("express");

const app = express();

const config = require("./webpack.config.js");
const compiler = webpack(config);
const middleware = webpackMiddleware(compiler, {
	publicPath: config.output.publicPath,
	serverSideRender: false,
	// watchOptions: {
	// 	ignored: /.*/
	// }
});

app.use(middleware);

app.get("/", (req, res) => {
	res.sendFile(path.resolve("./public/index.html"));
});

const http = require("http").createServer(app);
http.listen(PORT, console.log(`server listening on port ${PORT}`));