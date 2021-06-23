
const express = require('express');

const CarController = require('./controller');

const router = express.Router();


router.get('/cars/evs/GetAllEvs', CarController.getAllCars);
router.get('/cars/evs/GetAllMakes', CarController.getAllMakes);
router.get('/cars/evs/all-makes-by-year/:carYear', CarController.getAllCarsByYear);
router.get('/all-cars/all-makes/all-models-of/:carMake', CarController.getAllModelsofMake);
router.get('/all-cars/all-makes/all-models-of/:carYear/:carMake', CarController.getAllModelsofMakeByYear);
router.get('/all-car-years', CarController.getAllDistictYears);
router.get('/all-makes-by-year/:carYear', CarController.getAllDistinctMakesByYear);


module.exports = router;