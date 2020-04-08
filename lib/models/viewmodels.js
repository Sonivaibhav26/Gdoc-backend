import mongoose, {Schema} from 'mongoose';

const viewSchema = new mongoose.Schema({
    viewer: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    viewedAt: {
        type: Date,
        default: Date.now(),
        required: true
    },
    document: {
        type: Schema.Types.ObjectId,
        ref: 'Document',
        required: true
    }
});

module.exports = mongoose.model('Views', viewSchema);