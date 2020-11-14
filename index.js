// Import express
const express = require('express');
// Import http-proxy-middleware
const { createProxyMiddleware } = require('http-proxy-middleware');


// Initialize express
const app = express();

// Proxy settings
const settings = {
	target: 'https://api.spotify.com/v1',
	changeOrigin: true,
	onProxyReq: (proxyReq, req, res) => {
		proxyReq.setHeader('Authorization', 'Bearer BQBM5cfscMaqz49L84BGvwJ09HIBQK5qakJUm0Dt3n62Kev8c-IxSOMRGRUwdjC4pVLyjtMLBH3tUzKgOeiZIbp1SL0KlbehakzPvcBfom-Kp9CObM3Q1EnQfp36Gpp7cPeI5SoMSXpwLgg');
		proxyReq.path += '&type=track'
	},
	onProxyRes: (proxyRes, req, res) => {
		console.log(proxyRes)
	}
}
app.use('/search', createProxyMiddleware(settings));


if (process.env.NODE_ENV === 'production') {
	app.use(express.static('musicuristapp/build'))
	const path = require('path')
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'musicuristapp', 'build', 'index.html'))
	})
}

// Launch app to listen to specified port
const port = process.env.PORT || 3001;
app.listen(port, function () {
	console.log(`Running musicuristApp on port ${port}`);
});