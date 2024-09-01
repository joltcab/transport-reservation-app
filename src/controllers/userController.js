// src/controllers/userController.js

exports.getAllUsers = (req, res) => {
    res.status(200).json({ message: 'Get all users' });
};

exports.getUserById = (req, res) => {
    const userId = req.params.id;
    res.status(200).json({ message: `Get user with ID ${userId}` });
};

exports.createUser = (req, res) => {
    const userData = req.body;
    res.status(201).json({ message: 'User created', data: userData });
};
