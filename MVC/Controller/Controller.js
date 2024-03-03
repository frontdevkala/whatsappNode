const User = require('../Model/Model');

exports.register = (req, res) => {
  const { mobile_number } = req.body;

  User.create(mobile_number, (result) => {
    res.send('User registered successfully');
  });
};

exports.login = (req, res) => {
  const { mobile_number } = req.body;

  User.getByMobileNumber(mobile_number, (user) => {
    if (user) {
      res.send('Login successful');
    } else {
      res.status(404).send('User not found');
    }
  });
};
