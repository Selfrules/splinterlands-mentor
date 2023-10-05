const mongoose = require('mongoose');

const RuleSchema = new mongoose.Schema({
  name: String,
  description: String,
  abilitiesToUse: [String],
  abilitiesNotToUse: [String],
  suggestions: [String],
});

module.exports = mongoose.model('Rule', RuleSchema);