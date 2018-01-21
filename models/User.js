const mongoose = require('mongoose');
const { Schema } = mongoose;

// create our users schema. we can add/delete properties at will.
const userSchema = new Schema({
    googleId: String
});

// create a new model class called 'users' and tell mongoose we need to use the userSchema....
mongoose.model('users', userSchema);