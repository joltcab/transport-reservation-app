exports.getAllUsers = (req, res) => {
  res.status(200).json({ message: 'Get all users' });
};

exports.getUserById = (req, res) => {
  res.status(200).json({ message: 'Get user by ID' });
};

exports.createUser = (req, res) => {
  res.status(200).json({ message: 'Create user' });
};
