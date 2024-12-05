const Prediction = require('../models/Prediction');

// POST prediction
router.post('/predictions', async (req, res) => {
  const prediction = new Prediction({
    ...req.body,
    user: req.user._id // Assuming user is attached to req via middleware
  });
  try {
    await prediction.save();
    res.status(201).send(prediction);
  } catch (error) {
    res.status(400).send(error);
  }
});

// GET predictions
router.get('/predictions', async (req, res) => {
  try {
    const predictions = await Prediction.find({ user: req.user._id });
    res.status(200).send(predictions);
  } catch (error) {
    res.status(500).send(error);
  }
});
