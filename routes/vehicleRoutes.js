const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/vehicleController');

/**
 * @swagger
 * /api/vehicles:
 *   post:
 *     summary: Create a new vehicle
 *     tags: [Vehicles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Vehicle'
 *     responses:
 *       201:
 *         description: Created
 *   get:
 *     summary: Get all vehicles
 *     tags: [Vehicles]
 *     responses:
 *       200:
 *         description: List of vehicles
 * /api/vehicles/{id}:
 *   get:
 *     summary: Get vehicle by ID
 *     tags: [Vehicles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Vehicle details
 *       404:
 *         description: Not found
 *   put:
 *     summary: Update vehicle
 *     tags: [Vehicles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Vehicle'
 *     responses:
 *       200:
 *         description: Updated
 *   delete:
 *     summary: Delete vehicle
 *     tags: [Vehicles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Deleted
 */
router.post('/', ctrl.createVehicle);
router.get('/', ctrl.getVehicles);
router.get('/:id', ctrl.getVehicle);
router.put('/:id', ctrl.updateVehicle);
router.delete('/:id', ctrl.deleteVehicle);

module.exports = router;
