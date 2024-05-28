const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const { ObjectId } = Schema.Types;

const userSchema = new mongoose.Schema({
    username: {
        type: String, 
        required: true, 
        unique: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true
    },

    favoriteCollections: [{
        type: ObjectId,
        ref: 'Collection'
    }]
});

const User = model('User', userSchema);

module.exports = User;