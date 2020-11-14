// Import express
const express = require('express');
// Import Body parser
let bodyParser = require('body-parser');

// Initialize express
const app = express();
// Import routes
let apiRoutes = require('./routes/endpoints.js');
// Configure bodyparser to handle post requests
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

// Use Api routes in the App
app.use('/api', apiRoutes);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('ntagram/build'))
	const path = require('path')
	app.get('*', (req, res) => {
			res.sendFile(path.resolve(__dirname, 'ntagram', 'build', 'index.html'))
	})
}
// Launch app to listen to specified port

var port = process.env.PORT || 3001;
app.listen(port, function () {
  console.log(`Running favorites_API on port ${port}`);
});