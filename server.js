/* ==================================================== */
/* IMPORTS */
/* ==================================================== */
require('dotenv').config()
const express = require('express');
const fetch = require('node-fetch');
const { URLSearchParams } = require('url')
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

/* ==================================================== */
/* GET SPOTIFY API TOKEN */
/* ==================================================== */
app.use('', async (req, res, next) => {
	const encodedParams = new URLSearchParams();
	encodedParams.append('grant_type', 'client_credentials');

	const response = await fetch('https://accounts.spotify.com/api/token', {
		method: 'POST',
		headers: {
			"Authorization": `Basic ${process.env.SERVER_CLIENT_KEYS}`,
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: encodedParams
	}).catch(err => console.log('\n\n\nError: ', err, '\n\n\n'))
	const data = await response.json()
	req.headers['Authorization'] = 'Bearer ' + data.access_token

	next()
})

/* ==================================================== */
/* PROXY */
/* ==================================================== */
const settings = {
	target: 'https://api.spotify.com/v1',
	changeOrigin: true,
	onProxyReq: (proxyReq, req, res) => {
		proxyReq.path += '&type=track'
	}
}
app.use('/search', createProxyMiddleware(settings));

/* ==================================================== */
/* PRODUCTION SET UP */
/* ==================================================== */
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('musicuristapp/build'))
	const path = require('path')
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'musicuristapp', 'build', 'index.html'))
	})
}

const port = process.env.PORT;
app.listen(port, function () {
	console.log(`Running musicuristApp on port ${port}`);
});