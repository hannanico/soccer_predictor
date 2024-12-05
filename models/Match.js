const mongoose = require('mongoose');

const MatchSchema = new mongoose.Schema({
  homeTeam: String,
  awayTeam: String,
  matchDate: Date,
  matchTime: String,
  league: String,
});

module.exports = mongoose.model('Match', MatchSchema);
