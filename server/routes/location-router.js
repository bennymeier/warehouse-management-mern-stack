const express = require('express');
const LocationController = require('../controllers/location-controller');

const router = express.Router();

router.post('/location', LocationController.createLocation);
router.put('/location/:id', LocationController.updateLocation);
router.delete('/location/:id', LocationController.deleteLocation);
router.get('/location/:id', LocationController.getLocationById);
router.get('/locations', LocationController.getLocations);

module.exports = router;
