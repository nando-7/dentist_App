const express = require("express");
const router = express.Router();

const appointmentController = require('../controllers/appoint')
//const {appCreate} = require('../controllers/appointments')
const {slotController} = require('../controllers/slot')
const {list} = require('../controllers/slot')

router.get('/appointments', appointmentController.all);
router.get('/retrieveSlots', slotController.all);
router.post('/appointmentCreate', appointmentController.create);
router.get('/slots/:slot_date', list )
//router.post('/appointmentCreate', appCreate);

module.exports = router;