const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = require('./schema');

router.use(express.json()); 

router.get('/getUser', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

router.delete('/deleteUser/:id', async (req, res) => {
    try {
        const deleteUser = await User.findByIdAndDelete(req.params.id);
        res.json({ message: 'User deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

router.post('/postUser', async (req, res) => {
    try {
        const newUser = await new User({
            username: req.body.username,
            password: req.body.password
        }).save();
        res.json(newUser);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

router.put('/updateUser/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body);
        res.json(updatedUser);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
