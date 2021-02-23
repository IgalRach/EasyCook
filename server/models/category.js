const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// kind of food recipe - Italian, French, Israel...
const Category = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    createdAt: Date,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin' },
    updatedAt: Date,
    updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin' }
});

module.exports = mongoose.model('Category', Category);