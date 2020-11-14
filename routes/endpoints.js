// Initialize express router
let router = require('express').Router();

// Set default API response
router.get('/', function (req, res) {
  res.json({
    status: 'API Its Working',
  });
});

// Import spotify controller
var spotify = require('../controllers/spotifyApi');
// api endpoints
router
  .route('/search')
  .get(spotify.search)

// Export API routes
module.exports = router;