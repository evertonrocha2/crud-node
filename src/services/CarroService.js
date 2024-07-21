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
};
