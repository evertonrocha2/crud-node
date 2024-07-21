const express = require("express");
const router = express.Router();

const CarroControler = require("./controllers/CarController");

router.get("/cars", CarroControler.getAll);
router.get("/car/:id", CarroControler.getById);
router.post("/car", CarroControler.insertCar);
router.put("/car/:id", CarroControler.updateCar);
router.delete("/car/:id", CarroControler.deleteCar);

module.exports = router;
