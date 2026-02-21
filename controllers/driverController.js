const Driver = require('../models/Driver');

exports.createDriver = async (req, res, next) => {
  try {
    // sanitize incoming body: do not allow client to set _id or id
    const payload = { ...req.body };
    delete payload._id; delete payload.id;
    const driver = await Driver.create(payload);
    res.status(201).json(driver);
  } catch (err) { next(err); }
};

exports.getDrivers = async (req, res, next) => {
  try {
    const drivers = await Driver.find();
    res.json(drivers);
  } catch (err) { next(err); }
};

exports.getDriver = async (req, res, next) => {
  try {
    const driver = await Driver.findById(req.params.id);
    if (!driver) return res.status(404).json({ message: 'Not found' });
    res.json(driver);
  } catch (err) { next(err); }
};

exports.updateDriver = async (req, res, next) => {
  try {
    const payload = { ...req.body }; delete payload._id; delete payload.id;
    const driver = await Driver.findByIdAndUpdate(req.params.id, payload, { new: true });
    if (!driver) return res.status(404).json({ message: 'Not found' });
    res.json(driver);
  } catch (err) { next(err); }
};

exports.deleteDriver = async (req, res, next) => {
  try {
    const driver = await Driver.findByIdAndDelete(req.params.id);
    if (!driver) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Deleted' });
  } catch (err) { next(err); }
};
