const Vehicle = require('../models/Vehicle');

exports.createVehicle = async (req, res, next) => {
  try {
    const vehicle = await Vehicle.create(req.body);
    res.status(201).json(vehicle);
  } catch (err) { next(err); }
};

exports.getVehicles = async (req, res, next) => {
  try {
    const vehicles = await Vehicle.find();
    res.json(vehicles);
  } catch (err) { next(err); }
};

exports.getVehicle = async (req, res, next) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id);
    if (!vehicle) return res.status(404).json({ message: 'Not found' });
    res.json(vehicle);
  } catch (err) { next(err); }
};

exports.updateVehicle = async (req, res, next) => {
  try {
    const vehicle = await Vehicle.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!vehicle) return res.status(404).json({ message: 'Not found' });
    res.json(vehicle);
  } catch (err) { next(err); }
};

exports.deleteVehicle = async (req, res, next) => {
  try {
    const vehicle = await Vehicle.findByIdAndDelete(req.params.id);
    if (!vehicle) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Deleted' });
  } catch (err) { next(err); }
};
