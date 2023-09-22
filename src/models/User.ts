import mongoose from 'mongoose';

const userSchema = new mongoose.Schema ({
    _id: mongoose.Schema.Types.UUID,
    username: {
        type: String,
        required: true,
        minLength: [3, 'Username must be at least 3 characters long'],
        maxLength: [20, 'Username must be at most 20 characters long'],
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: [true, "email not provided"],
        validate: {
            validator: function (v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
        message: '{VALUE} is not a valid email!'
        }
    },
    password: {
        type: String,
        required: true
    },
    xittering: [ this ],
    profile_picture: {type: String},
    profile_header: {type: String},
    role: {
        type: String,
        enum: ["user", "moderator", "admin"],
        required: [true, "Please specify user role"]
    }
})

const User = mongoose.model('User', userSchema);

export default User;