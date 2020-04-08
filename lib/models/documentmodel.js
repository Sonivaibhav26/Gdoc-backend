import mongoose, {Schema} from 'mongoose';

const documentSchema = new mongoose.Schema({
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        required: true
    },
    data: {
        type: String,
        required: true
    },
    permitedUser: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
});

module.exports = mongoose.model('Document', documentSchema);