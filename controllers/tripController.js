const Trip = require('../models/Trip');

exports.createTrip = async (req, res, next) => {
  try {
    const payload = { ...req.body }; delete payload._id; delete payload.id;
    const trip = await Trip.create(payload);
    res.status(201).json(trip);
  } catch (err) { next(err); }
};

exports.getTrips = async (req, res, next) => {
  try {
    const trips = await Trip.find().populate('vehicle driver');
    res.json(trips);
  } catch (err) { next(err); }
};

exports.getTrip = async (req, res, next) => {
  try {
    const trip = await Trip.findById(req.params.id).populate('vehicle driver');
    if (!trip) return res.status(404).json({ message: 'Not found' });
    res.json(trip);
  } catch (err) { next(err); }
};

exports.updateTrip = async (req, res, next) => {
  try {
    const payload = { ...req.body }; delete payload._id; delete payload.id;
    const trip = await Trip.findByIdAndUpdate(req.params.id, payload, { new: true }).populate('vehicle driver');
    if (!trip) return res.status(404).json({ message: 'Not found' });
    res.json(trip);
  } catch (err) { next(err); }
};

exports.deleteTrip = async (req, res, next) => {
  try {
    const trip = await Trip.findByIdAndDelete(req.params.id);
    if (!trip) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Deleted' });
  } catch (err) { next(err); }
};
