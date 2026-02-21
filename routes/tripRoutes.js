const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/tripController');

/**
 * @swagger
 * /api/trips:
 *   post:
 *     summary: Create a new trip
 *     tags: [Trips]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Trip'
 *     responses:
 *       201:
 *         description: Created
 *   get:
 *     summary: Get all trips
 *     tags: [Trips]
 *     responses:
 *       200:
 *         description: List of trips
 * /api/trips/{id}:
 *   get:
 *     summary: Get trip by ID
 *     tags: [Trips]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Trip details
 *       404:
 *         description: Not found
 *   put:
 *     summary: Update trip
 *     tags: [Trips]
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
 *             $ref: '#/components/schemas/Trip'
 *     responses:
 *       200:
 *         description: Updated
 *   delete:
 *     summary: Delete trip
 *     tags: [Trips]
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
router.post('/', ctrl.createTrip);
router.get('/', ctrl.getTrips);
router.get('/:id', ctrl.getTrip);
router.put('/:id', ctrl.updateTrip);
router.delete('/:id', ctrl.deleteTrip);

module.exports = router;
