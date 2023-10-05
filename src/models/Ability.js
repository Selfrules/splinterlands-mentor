const mongoose = require('mongoose');

const AbilitySchema = new mongoose.Schema({
    name: String,
    description: String,
});

module.exports = mongoose.model('Ability', AbilitySchema);