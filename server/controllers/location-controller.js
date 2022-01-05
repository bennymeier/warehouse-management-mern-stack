const Location = require('../models/location-model');

const createLocation = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a location',
    });
  }

  try {
    const location = new Location(body);
    await location.save();
    return res.status(201).json({
      success: true,
      data: location,
      message: 'Location created!',
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error,
      message: 'Location not created!',
    });
  }
};

const updateLocation = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a body to update',
    });
  }

  try {
    await Location.updateOne({ _id: req.params.id }, body);
    return res.status(200).json({
      success: true,
      message: 'Location updated!',
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      error,
      message: 'Location not updated!',
    });
  }
};

const deleteLocation = async (req, res) => {
  try {
    const location = await Location.findOneAndDelete({ _id: req.params.id });

    if (!location) {
      return res
        .status(404)
        .json({ success: false, error: `Location not found` });
    }

    return res.status(200).json({ success: true, id: location._id });
  } catch (error) {
    return res.status(400).json({ success: false, error });
  }
};

const getLocationById = async (req, res) => {
  try {
    const location = await Location.findOne({ _id: req.params.id });

    if (!location) {
      return res
        .status(404)
        .json({ success: false, error: `Location not found` });
    }

    return res.status(200).json({ success: true, data: location });
  } catch (error) {
    return res.status(400).json({ success: false, error });
  }
};

const getLocations = async (req, res) => {
  try {
    const locations = await Location.find({});

    if (!locations.length) {
      return res
        .status(404)
        .json({ success: false, error: `Locations not found` });
    }

    return res.status(200).json({ success: true, data: locations });
  } catch (error) {
    return res.status(400).json({ success: false, error });
  }
};

module.exports = {
  createLocation,
  updateLocation,
  deleteLocation,
  getLocationById,
  getLocations,
};
