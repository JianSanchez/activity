const express = require('express');
const router = express.Router();

const Inventory = require('../Model/Inventory.model');

// Get a All Car Company
router.post('/', async (req, res, next) => {
    try {
        const car = new Inventory(req.body);
        const result = await car.save();
        res.send(result);
    } catch (error) {
        res.send(error.message);
    }
});

// Creating a New Car Company
router.get('/', async(req, res, next) => {
    const id = req.params.id;
    try{
        const car = await Inventory.find({}, {__v: 0});
        res.send(car);
    }catch (error) {
        res.send(error.message);
    }
});

// Update Car Companies Information
router.patch('/:id', async (req, res, next) => {
    try{
        const id = req.params.id;
        const update = req.body
        const result = await Inventory.findByIdAndUpdate(id, update);
        res.send(result)
    }catch (error) {
        res.send(error.message);
    }
});

// Delete a Car Company
router.delete('/:id',async (req, res, next) => {
    const id = req.params.id;
    try{
        const car = await Inventory.findByIdAndDelete(id);
        res.send(car);
    }catch (error) {
        res.send(error.message);
    }
});


module.exports = router;