const express = require("express");
const router = express.Router();

const CarroControler = require("./controllers/CarroController");

router.get("/carros", CarroControler.getAll);
router.get("/carros/:id", CarroControler.getById);
router.post("/carro", CarroControler.insertCar);
router.put("/carro/:id", CarroControler.updateCar);
router.delete("/carro/:id", CarroControler.deleteCar);

module.exports = router;
