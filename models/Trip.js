/**
 * @swagger
 * components:
 *   schemas:
 *     Trip:
 *       type: object
 *       required:
 *         - vehicle
 *         - driver
 *       properties:
 *         id:
 *           type: string
 *           description: Auto-generated ID
 *         vehicle:
 *           type: string
 *           description: Vehicle ID
 *         driver:
 *           type: string
 *           description: Driver ID
 *         origin:
 *           type: string
 *         destination:
 *           type: string
 *         startTime:
 *           type: string
 *           format: date-time
 *         endTime:
 *           type: string
 *           format: date-time
 *         status:
 *           type: string
 *           enum: [scheduled, ongoing, completed, cancelled]
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 */
const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  vehicle: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle', required: true },
  driver: { type: mongoose.Schema.Types.ObjectId, ref: 'Driver', required: true },
  origin: { type: String },
  destination: { type: String },
  startTime: { type: Date },
  endTime: { type: Date },
  status: { type: String, enum: ['scheduled', 'ongoing', 'completed', 'cancelled'], default: 'scheduled' }
}, { timestamps: true });

module.exports = mongoose.model('Trip', tripSchema);
