const CarroService = require("../services/CarService");

module.exports = {
  getAll: async (req, res) => {
    let json = { error: "", result: [] };
    let cars = await CarroService.getAll();

    for (let i = 0; i < cars.length; i++) {
      json.result.push({
        codigo: cars[i].codigo,
        descricao: cars[i].modelo,
      });
    }
    res.json(json);
  },

  getById: async (req, res) => {
    let json = { error: "", result: {} };
    let car = await CarroService.getById(req.params.id);
    if (car.length > 0) {
      return res.json(car);
    } else {
      json.error = "Carro não encontrado";
    }
  },

  insertCar: async (req, res) => {
    let json = { error: "", result: {} };
    let model = req.body.modelo;
    let placa = req.body.placa;
    if (model && placa) {
      let codeCar = await CarroService.insertCar(model, placa);
      json.result = {
        codigo: codeCar,
        model,
        placa,
      };
      res.json(json);
    } else {
      json.error = "We need a model and a placa";
    }
  },

  updateCar: async (req, res) => {
    let json = { error: "", result: {} };

    let model = req.body.modelo;
    let placa = req.body.placa;
    let code = req.params.id;
    if (model && placa && code) {
      await CarroService.updateCar(code, model, placa);
      json.result = {
        code,
        model,
        placa,
      };
      res.json(json);
    }
  },

  deleteCar: async (req, res) => {
    let json = { error: "", result: {} };
    let code = req.params.id;
    if (code) {
      await CarroService.deleteCar(code);
      json.result = {
        code,
        message: "Carro deletado com sucesso",
      };
      res.json(json);
    }
  },
};
