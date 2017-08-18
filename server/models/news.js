import mongoose, { Schema } from 'mongoose';
// item.createdAt.getMonth()+1}/${item.createdAt.getUTCDay()}/${item.createdAt.getUTCFullYear()
var date = new Date(Date.now());

const NewsSchema = new Schema({
    title: {type: String, require: true},
    body: {type: String, require: true},
    url: {type: String, require: true, unique: true},
    createdAt: {type: Date, require: true, default: Date.now()},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

export default mongoose.model('News', NewsSchema);