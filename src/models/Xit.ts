import mongoose from 'mongoose';
import User from './User';

const xitSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.UUID,
    user: User,
    content: String,
    likes: [ User ],
    createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true,
    },
    updatedAt: {
        type: Date,
        default: () => Date.now(),
    }
});

const Xit = mongoose.model('Xit', xitSchema);
export default Xit;