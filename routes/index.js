const express = require("express");
const Router = express.Router();
const EventController = require('../controllers/eventController');
const LocationController = require("../controllers/locationController");
const PurchaseController = require("../controllers/purchaseController");

Router.post('/event/create',EventController.create)
Router.post('/location/create', LocationController.create)
Router.post("/event/ticket/create", EventController.createTicket)
Router.get('/event/get_info',EventController.list)
Router.post('/transaction/purchase',PurchaseController.create)
Router.get('/transaction/get_info',PurchaseController.list)

module.exports = Router