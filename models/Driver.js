/**
 * @swagger
 * components:
 *   schemas:
 *     Driver:
 *       type: object
 *       required:
 *         - name
 *         - licenseNumber
 *       properties:
 *         id:
 *           type: string
 *           description: Auto-generated ID
 *         name:
 *           type: string
 *         licenseNumber:
 *           type: string
 *         phone:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 */
const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
  name: { type: String, required: true },
  licenseNumber: { type: String, required: true, unique: true },
  phone: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Driver', driverSchema);
