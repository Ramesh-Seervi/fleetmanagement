const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/driverController');

/**
 * @swagger
 * /api/drivers:
 *   post:
 *     summary: Create a new driver
 *     tags: [Drivers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Driver'
 *     responses:
 *       201:
 *         description: Created
 *   get:
 *     summary: Get all drivers
 *     tags: [Drivers]
 *     responses:
 *       200:
 *         description: List of drivers
 * /api/drivers/{id}:
 *   get:
 *     summary: Get driver by ID
 *     tags: [Drivers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Driver details
 *       404:
 *         description: Not found
 *   put:
 *     summary: Update driver
 *     tags: [Drivers]
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
 *             $ref: '#/components/schemas/Driver'
 *     responses:
 *       200:
 *         description: Updated
 *   delete:
 *     summary: Delete driver
 *     tags: [Drivers]
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
router.post('/', ctrl.createDriver);
router.get('/', ctrl.getDrivers);
router.get('/:id', ctrl.getDriver);
router.put('/:id', ctrl.updateDriver);
router.delete('/:id', ctrl.deleteDriver);

module.exports = router;
