const db = require("../db");

module.exports = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM carros", (err, res) => {
        if (err) reject(err);
        resolve(res);
      });
    });
  },
  getById: (id) => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM carros WHERE codigo = ?", [id], (err, res) => {
        if (err) reject(err);
        resolve(res);
      });
    });
  },
  insertCar: (model, placa) => {
    return new Promise((resolve, reject) => {
      db.query(
        "INSERT INTO carros (modelo, placa) VALUES (?, ?)",
        [model, placa],
        (err, res) => {
          if (err) reject(err);
          resolve(res.insertId);
        }
      );
    });
  },
  updateCar: (code, model, placa) => {
    return new Promise((resolve, reject) => {
      db.query(
        "UPDATE carros SET modelo = ?, placa = ? WHERE codigo = ?",
        [model, placa, code],
        (err, res) => {
          if (err) {
            reject(err);
            return;
          }
          resolve(res.affectedRows);
        }
      );
    });
  },
  deleteCar: (code) => {
    return new Promise((resolve, reject) => {
      db.query("DELETE FROM carros WHERE codigo = ?", [code], (err, res) => {
        if (err) reject(err);
        resolve(res.affectedRows);
      });
    });
  },
};
