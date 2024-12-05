const express = require('express');
const router = express.Router();
const Match = require('../models/Match');

router.post('/', async (req, res) => {
    const match = new Match(req.body);
    try {
        await match.save();
        res.status(201).send(match);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.get('/', async (req, res) => {
    try {
        const matches = await Match.find();
        res.send(matches);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;