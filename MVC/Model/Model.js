const db = require('../DB/DB.Config');

class User {
  constructor(mobile_number) {
    this.mobile_number = mobile_number;
  }

  static getByMobileNumber(mobile_number, callback) {
    db.query('SELECT * FROM login WHERE mobile_number = ?', [mobile_number], (err, results) => {
      if (err) throw err;
      callback(results[0]);
    });
  }

  static create(mobile_number, callback) {
    db.query('INSERT INTO login (mobile_number) VALUES (?)', [mobile_number], (err, result) => {
      if (err) throw err;
      callback(result);
    });
  }
}

module.exports = User;
