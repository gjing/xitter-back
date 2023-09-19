import mongoose from 'mongoose';

const userSchema = new mongoose.Schema ({
    _id: mongoose.Schema.Types.UUID,
    username: {
        type: String,
        required: true,
        minLength: [3, 'Username must be at least 3 characters long'],
        maxLength: [20, 'Username must be at most 20 characters long'],
    },
    password: {
        type: String,
        required: true
    },
    xittering: [ this ],
    profile_picture: {type: String},
    profile_header: {type: String}
})

const User = mongoose.model('User', userSchema);
export default User;