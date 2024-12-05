const mongoose = require('mongoose');

const PredictionSchema = new mongoose.Schema({
    user: {type: mongoose.SchemaType.Types.ObjectId, ref: 'User'},
    match: {type: mongoose.SchemaType.Types.ObjectId, ref: 'Match'},
    predictedResult: String,
    createdAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Prediction', PredictionSchema);