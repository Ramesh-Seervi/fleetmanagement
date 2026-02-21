/**
 * @swagger
 * components:
 *   schemas:
 *     Vehicle:
 *       type: object
 *       required:
 *         - make
 *         - model
 *         - vin
 *       properties:
 *         id:
 *           type: string
 *           description: Auto-generated ID
 *         make:
 *           type: string
 *         model:
 *           type: string
 *         year:
 *           type: number
 *         vin:
 *           type: string
 *         status:
 *           type: string
 *           enum: [available, in_service, maintenance]
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 */
const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number },
  vin: { type: String, unique: true, required: true },
  status: { type: String, enum: ['available', 'in_service', 'maintenance'], default: 'available' }
}, { timestamps: true });

module.exports = mongoose.model('Vehicle', vehicleSchema);
